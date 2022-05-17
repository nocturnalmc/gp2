import { getTokenized } from "../../useToken";
import axios from "axios";

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

export async function getTaska() {
  let response = await axios.post(
    `http://localhost:5000/api/v1/superadmin/taska`,
    {
      token: getTokenized(),
    }
  );
  console.log(response);
  return response.data;
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
