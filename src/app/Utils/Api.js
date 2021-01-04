import axios from "axios";
import {
  addApartamentSurname,
  addIncedentInfo,
  formatIncedentForFamily,
  generateFamily,
} from "./ProcessResult";

const restApi = axios.create({
  baseURL: "http://localhost:8081/sensycry/",
  responseType: "json",
});

export const fetchData = async (link, many) => {
  try {
    let responseData = await restApi.get(link);

    const link_resource = link.split("/")[0];
    let data = responseData.data;
    switch (link_resource) {
      case "incedent":
        if (link.split("/")[1] === "apartment") {
          data = formatIncedentForFamily(data);
          break;
        }
        data = await addIncedentInfo(data);
        break;
      case "apartment":
        if (!many) {
          data = generateFamily(data);
        } else {
          data = await addApartamentSurname(data);
        }
        break;

      default:
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
