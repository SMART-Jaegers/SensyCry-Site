import axios from "axios";
import {
  addApartamentSurname,
  addIncedentInfo,
  formatIncedentForFamily,
} from "./ProcessResult";

const restApi = axios.create({
  baseURL: "http://localhost:8081/sensycry/",
  responseType: "json",
});

export const fetchIncedent = async (link) => {
  try {
    let responseData = await restApi.get(link);
    const link_resource = link.split("/")[0];
    let data;
    switch (link_resource) {
      case "incedent":
        if (link.split("/")[1] === "apartment") {
          data = formatIncedentForFamily(responseData.data);
          break;
        }
        data = await addIncedentInfo(responseData.data);
        break;
      case "apartment":
        data = await addApartamentSurname(responseData.data);
        break;

      default:
        data = responseData.data;
        break;
    }
    return data;
  } catch (error) {
    console.log(` cant fetch data  by link: ${link}, error: ${error}`);
    return null;
  }
};

// export const fetchIncedentById = async (id) => {
//   try {
//     let responseElement = await restApi.get("/incedent" + id);
//     return [responseElement.data];
//   } catch (error) {
//     console.log("error, cant fetch incedent", error);
//     return [];
//   }
// };

// export const patchData = async (element) => {
//   try {
//     await restApi.put("/" + element.id, element);
//   } catch {
//     console.log("error, cant patch element");
//   }
// };

// export const fetchApartamentById = async (id) => {
//   try {
//     let responseElement = await restApi.get("/apartment" + id);
//     return responseElement.data;
//   } catch (error) {
//     console.log("error, cant fetch apartament");
//     return error;
//   }
// };

export const fetchByLinkOne = async (link) => {
  try {
    let response = await axios.get(link);
    return response.data;
  } catch (error) {
    console.log(` cant fetch element by link: ${link}, error: ${error}`);
    return null;
  }
};
