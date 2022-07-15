import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { gql } from '@apollo/client';

const storageUserToken = localStorage.getItem('userToken');
const storageUsername = localStorage.getItem('username');
const storageFasilitiRelief = localStorage.getItem('fasilitiRelief');

const storageKaunterToken = localStorage.getItem('kaunterToken');

// get a date for today
const rawToday = new Date();
const dd = String(rawToday.getDate()).padStart(2, '0');
const mm = String(rawToday.getMonth() + 1).padStart(2, '0');
const yyyy = rawToday.getFullYear();
const dateToday = yyyy + '-' + mm + '-' + dd;

const UserAppContext = React.createContext();

function UserAppProvider({ children }) {
  const [userToken, setUserToken] = useState(storageUserToken);
  const [username, setUsername] = useState(storageUsername);
  const [fasilitiRelief, setFasilitiRelief] = useState(storageFasilitiRelief);

  const [kaunterToken, setKaunterToken] = useState(storageKaunterToken);

  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const [isLoginError, setIsLoginError] = useState(false);

  const [displayLoginForm, setDisplayLoginForm] = useState(true);
  const [displayPilihNama, setDisplayPilihNama] = useState(false);
  const [displayPilihFasiliti, setDisplayPilihFasiliti] = useState(false);

  const navigate = useNavigate();

  const loginUser = async ({ username, password }) => {
    try {
      const { data } = await axios.post('/api/v1/auth/login', {
        username,
        password,
      });
      localStorage.setItem('userToken', data.userToken);
      setUserToken(data.userToken);
      setDisplayLoginForm(false);
      setDisplayPilihNama(true);
    } catch (error) {
      catchAxiosErrorAndLogout();
      setLoginErrorMessage(error.response.data.msg);
      setIsLoginError(true);
      setTimeout(() => {
        setIsLoginError(false);
      }, 3000);
      navigate('/');
    }
  };

  const loginKaunter = async ({ username, password }) => {
    try {
      const { data } = await axios.post('/api/v1/auth/kaunter/login', {
        username,
        password,
      });
      localStorage.setItem('kaunterToken', data.kaunterToken);
      setKaunterToken(data.kaunterToken);
      navigate('/kaunter/daftar');
    } catch (error) {
      catchAxiosErrorAndLogout();
      setLoginErrorMessage(error.response.data.msg);
      setIsLoginError(true);
      setTimeout(() => {
        setIsLoginError(false);
      }, 3000);
      navigate('/kaunter');
    }
  };

  const catchAxiosErrorAndLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    localStorage.removeItem('fasilitiRelief');
    localStorage.removeItem('kaunterToken');
    setUserToken(null);
    setUsername(null);
    setFasilitiRelief(null);
    setKaunterToken(null);
  };

  // GQL queries
  const GET_ALL_PATIENTS = gql`
    query GetAllPatients($nothing: String) {
      patients {
        _id
        nama
        jenisIc
        ic
        tarikhLahir
        umur
        jantina
        tarikhKedatangan
        alamat
        waktuSampai
        kategoriPesakit
        kumpulanEtnik
        rujukDaripada
        createdAt
      }
    }
  `;

  const ADD_PATIENT = gql`
    mutation CreatePatient(
      $createdByNegeri: String
      $createdByDaerah: String
      $createdByKp: String
      $createdByUsername: String
      $nama: String
      $jenisIc: String
      $ic: String
      $tarikhLahir: String
      $jantina: String
      $tarikhKedatangan: String
      $umur: Int
      $rujukDaripada: String
      $alamat: String
      $waktuSampai: String
      $kategoriPesakit: String
      $kumpulanEtnik: String
    ) {
      createPatient(
        patient: {
          createdByNegeri: $createdByNegeri
          createdByDaerah: $createdByDaerah
          createdByKp: $createdByKp
          createdByUsername: $createdByUsername
          nama: $nama
          jenisIc: $jenisIc
          ic: $ic
          tarikhLahir: $tarikhLahir
          tarikhKedatangan: $tarikhKedatangan
          jantina: $jantina
          umur: $umur
          alamat: $alamat
          waktuSampai: $waktuSampai
          kategoriPesakit: $kategoriPesakit
          kumpulanEtnik: $kumpulanEtnik
          rujukDaripada: $rujukDaripada
        }
      ) {
        createdByKp
        createdByDaerah
        createdByNegeri
        createdByUsername
        nama
        jenisIc
        ic
        tarikhLahir
        tarikhKedatangan
        jantina
        umur
        alamat
        waktuSampai
        kategoriPesakit
        kumpulanEtnik
        rujukDaripada
      }
    }
  `;

  const GET_PATIENT_BY_TARIKH_KEDATANGAN = gql`
    query getPatientByTarikhKedatangan($tarikhKedatangan: String!) {
      listPatientByTarikhKedatangan(tarikhKedatangan: $tarikhKedatangan) {
        _id
        nama
        jenisIc
        ic
        tarikhLahir
        umur
        jantina
        tarikhKedatangan
        alamat
        waktuSampai
        kategoriPesakit
        kumpulanEtnik
        rujukDaripada
        createdAt
      }
    }
  `;

  const GET_PATIENT = gql`
    query getPatient($id: String!) {
      patient(_id: $id) {
        nama
        jenisIc
        ic
        tarikhLahir
        tarikhKedatangan
        jantina
        umur
        alamat
        waktuSampai
        kategoriPesakit
        kumpulanEtnik
        rujukDaripada
      }
    }
  `;

  const UPDATE_PATIENT = gql`
    mutation UpdatePatient(
      $_id: String
      $nama: String
      $jenisIc: String
      $ic: String
      $tarikhLahir: String
      # $tarikhKedatangan: String
      $jantina: String
      $umur: Int
      $alamat: String
      $waktuSampai: String
      $kategoriPesakit: String
      $kumpulanEtnik: String
      $rujukDaripada: String
    ) {
      updatePatient(
        patient: {
          _id: $_id
          nama: $nama
          jenisIc: $jenisIc
          ic: $ic
          tarikhLahir: $tarikhLahir
          # tarikhKedatangan: $tarikhKedatangan
          jantina: $jantina
          umur: $umur
          alamat: $alamat
          waktuSampai: $waktuSampai
          kategoriPesakit: $kategoriPesakit
          kumpulanEtnik: $kumpulanEtnik
          rujukDaripada: $rujukDaripada
        }
      ) {
        nama
        jenisIc
        ic
        tarikhLahir
        # tarikhKedatangan
        jantina
        umur
        alamat
        waktuSampai
        kategoriPesakit
        kumpulanEtnik
        rujukDaripada
      }
    }
  `;
  // GQL QUERIES

  return (
    <UserAppContext.Provider
      value={{
        userToken,
        username,
        setUsername,
        fasilitiRelief,
        setFasilitiRelief,
        kaunterToken,
        loginErrorMessage,
        isLoginError,
        displayLoginForm,
        setDisplayLoginForm,
        displayPilihNama,
        setDisplayPilihNama,
        displayPilihFasiliti,
        setDisplayPilihFasiliti,
        navigate,
        loginUser,
        loginKaunter,
        catchAxiosErrorAndLogout,
        useParams,
        dateToday,
        GET_ALL_PATIENTS,
        ADD_PATIENT,
        GET_PATIENT_BY_TARIKH_KEDATANGAN,
        GET_PATIENT,
        UPDATE_PATIENT,
      }}
    >
      {children}
    </UserAppContext.Provider>
  );
}

const useGlobalUserAppContext = () => {
  return useContext(UserAppContext);
};

export { UserAppProvider, useGlobalUserAppContext };
