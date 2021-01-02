import { render } from "@testing-library/react";
import axios from "axios";
import { addAddress } from "./ProcessResult";

const restApi = axios.create({
  baseURL: "http://localhost:8081/sensycry",
  responseType: "json",
});

export const fetchIncedent = async () => {
  try {
    let responseData = await restApi.get("/incedent");
    let data = await addAddress(responseData.data);
    return data;
  } catch (error) {
    console.log("error, cant fetch incedents", error);
    return [];
  }
};

export const fetchIncedentById = async (id) => {
  try {
    let responseElement = await restApi.get("/incedent" + id);
    return responseElement.data;
  } catch (error) {
    console.log("error, cant fetch incedent");
    return error;
  }
};

// export const patchData = async (element) => {
//   try {
//     await restApi.put("/" + element.id, element);
//   } catch {
//     console.log("error, cant patch element");
//   }
// };

export const fetchApartamentById = async (id) => {
  try {
    let responseElement = await restApi.get("/apartment" + id);
    return responseElement.data;
  } catch (error) {
    console.log("error, cant fetch apartament");
    return error;
  }
};

export const fetchByLink = async (link) => {
  try {
    let response = await axios.get(link);
    return response.data;
  } catch (error) {
    console.log("error, cant fetch custom element");
    return error;
  }
};
