const { buildSchema } = require('graphql');

module.exports = buildSchema(`
  """
  A Patient refers to available attributes for a Patient
  """
  type Patient {
    _id: ID!
    createdByNegeri: String,
    createdByDaerah: String,
    createdByKp: String,
    createdByUsername: String,
    nama: String,
    jenisIc: String
    ic: String,
    tarikhLahir: String,
    umur: Int,
    jantina: String,
    tarikhKedatangan: String,
    alamat: String,
    waktuSampai: String,
    kategoriPesakit: String,
    kumpulanEtnik: String,
    rujukDaripada: String,
    createdAt: String
  }
  input PatientType {
    createdByNegeri: String,
    createdByDaerah: String,
    createdByKp: String,
    createdByUsername: String,
    nama: String,
    jenisIc: String,
    ic: String,
    tarikhLahir: String,
    tarikhKedatangan: String,
    jantina: String,
    umur: Int,
    alamat: String,
    waktuSampai: String,
    kategoriPesakit: String,
    kumpulanEtnik: String,
    rujukDaripada: String,
  }
  input UpdatePatient{
    _id: String,
    createdByNegeri: String,
    createdByDaerah: String,
    createdByKp: String,
    createdByUsername: String,
    nama: String,
    jenisIc: String,
    ic: String,
    tarikhLahir: String,
    tarikhKedatangan: String,
    jantina: String,
    umur: Int,
    alamat: String,
    waktuSampai: String,
    kategoriPesakit: String,
    kumpulanEtnik: String,
    rujukDaripada: String,
  }
  type RootQuery {
    patient(_id: String!): Patient!
    patients: [Patient!]
    listPatientByTarikhKedatangan(tarikhKedatangan: String!): [Patient!]
  }
  type Mutation {
    createPatient(patient: PatientType): Patient,
    deletePatient(_id: String): Patient,
    updatePatient(patient: UpdatePatient): Patient,
  }
  schema {
    query: RootQuery
    mutation: Mutation
  }
`);
