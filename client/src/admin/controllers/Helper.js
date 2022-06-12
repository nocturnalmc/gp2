import { getTokenized } from "./Tokenizer";
import axios from "axios";

export const Dictionary = {
  klinik: "Klinik",
  taska: "Taska",
  tadika: "Tadika",
  sr: "Sekolah Rendah",
  sm: "Sekolah Menengah",
  ins: "Institusi",
};

export async function getCurrentUser() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/getuser`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response;
}

export async function getKP() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/kp`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function getPG() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/pg`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function searchPg(search) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/pg/find`,
    {
      token: getTokenized(),
      id: search,
    }
  );
  // console.log(response);
  return response.data;
}

export async function addPp(data) {
  console.log(data);
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/pg/add`,
    {
      token: getTokenized(),
      nama: data.nama,
      gred: data.gred,
      kp: data.kp,
      role: data.role,
    }
  );
  // console.log(response);
  return response;
}

export async function deletePegawai(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/pg/delete`,
    {
      token: getTokenized(),
      id: data,
    }
  );
  console.log(response);
  return response;
}

export async function editPegawai(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/pg/edit`,
    {
      token: getTokenized(),
      id: data.id,
      gred: data.gred,
      kp: data.kp,
      role: data.role,
    }
  );
  console.log(response);
  return response;
}

export async function getTaska() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/taska`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function deleteTaska(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facility/delete`,
    {
      token: getTokenized(),
      id: data,
    }
  );
  console.log(response);
  return response;
}

export async function getTadika() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/tadika`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function getSR() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/sr`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function getSM() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/sm`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function getInstitusi() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/ins`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function getFacilitiesType() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facilitytype`,
    {
      token: getTokenized(),
    }
  );
  // console.log(response);
  return response.data;
}

export async function addKp(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/kp/add`,
    {
      token: getTokenized(),
      klinik: data,
    }
  );
  // console.log(response);
  return response;
}

export async function deleteData(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/delete`,
    {
      token: getTokenized(),
      id: data,
    }
  );
  // console.log(response);
  return response;
}

export async function addFacility(data) {
  // console.log(data);
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facility/add/${data.jenisFacility}`,
    {
      token: getTokenized(),
      nama: data.nama,
      type: data.type,
      handler: data.kp,
    }
  );
  // console.log(response);
  return response;
}

export async function getFacility(data) {
  console.log(data);
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facility/list`,
    {
      token: getTokenized(),
      jenisFacility: data,
    }
  );
  // console.log(response);
  return response.data;
}

export async function editFacility(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facility/edit`,
    {
      token: getTokenized(),
      id: data.id,
      handler: data.kp,
    }
  );
  // console.log(response);
  return response;
}

export async function deleteFacility(data) {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facility/delete`,
    {
      token: getTokenized(),
      id: data,
    }
  );
  // console.log(response);
  return response;
}

export async function searchFacility(search) {
  console.log(search);
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/facility/find`,
    {
      token: getTokenized(),
      id: search,
    }
  );
  // console.log(response);
  return response.data;
}
