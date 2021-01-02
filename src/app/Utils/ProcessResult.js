import { fetchByLink } from "./Api";

export const addAddress = async (data) => {
  for (let element of data) {
    let value = await fetchByLink(element.links[1].href);
    element.address = value.address;
  }
  return data;
};
