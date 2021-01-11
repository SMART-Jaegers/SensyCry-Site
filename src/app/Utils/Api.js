import axios from "axios";
import {
  addIncedentInfo,
  formatIncedentForFamily,
  generateFamily,
} from "./ProcessResult";

const restApi = axios.create({
  baseURL: "https://sensycrytest.herokuapp.com/sensycry/",
  responseType: "json",
});

export const fetchData = async (link) => {
  try {
    let responseData = await restApi.get(link);
    return responseData.data;
  } catch (error) {
    console.log(` cant fetch data  by link: ${link}, error: ${error}`);
    return null;
  }
};

export const getData = async (link, many) => {
  let data = await fetchData(link);

  const link_resource = link.split("/")[0];

  switch (link_resource) {
    case "incedent":
      if (!many) {
        data = addIncedentInfo(data);
        break;
      }
      data.forEach((element) => {
        element = addIncedentInfo(element);
      });
      if (link.split("/")[1] === "apartment") {
        data = formatIncedentForFamily(data);
      }
      break;

    case "apartment":
      if (!many) {
        data = generateFamily(data);
      } else {
        data.forEach((element) => {
          element = generateFamily(element);
        });
      }
      break;

    default:
      break;
  }

  return data;
};
