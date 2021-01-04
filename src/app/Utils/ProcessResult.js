import { fetchByLinkOne, fetchIncedent } from "./Api";

export const addIncedentInfo = async (data) => {
  for (let element of data) {
    let value = await fetchByLinkOne(element.links[1].href);
    element.address = value.address;
    element.familyId = value.familyId;
    let formatedDate = element.date.split("T");
    let formatedTime = formatedDate[1].split("+");

    element.date = `${formatedDate[0]} ${formatedTime[0].substring(0, 5)}`;
  }
  return data;
};

export const addApartamentSurname = async (data) => {
  for (let element of data) {
    let value = await fetchIncedent(element.links[2].href);
    if (value[0] === undefined) {
      element.surname = null;
      continue;
    }
    element.surname = value[0].surname;
  }
  return data;
};

export const formatIncedentForFamily = async (data) => {
  let formatedData = {};
  for (let element of data) {
    let key = element.date.split("T")[0];
    let formatedTime = element.date.split("T")[1].split("+")[0];
    element.date = `${formatedTime.substring(0, 8)}`;
    if (formatedData[key] === undefined) {
      formatedData[key] = [];
    }
    formatedData[key].push(element);
  }
  return formatedData;
};
