export const addIncedentInfo = (incedent) => {
  let value = incedent.apartment;
  incedent.address = value.address;
  incedent.familyId = value.familyId;
  incedent.surname = value.people.length === 0 ? null : value.people[0].surname;
  incedent.dateIncedent = incedent.date.split("T")[0];
  incedent.timeIncedent = incedent.date.split("T")[1].substring(0, 8);
  incedent.dateToMinute = `${
    incedent.dateIncedent
  } ${incedent.timeIncedent.substring(0, 5)}`;
  incedent.apartment = generateFamily(incedent.apartment);

  return incedent;
};

export const formatIncedentForFamily = (data) => {
  let incedentDict = {};

  for (let element of data) {
    let key = element.date.split("T")[0];

    if (incedentDict[key] === undefined) {
      incedentDict[key] = [];
    }
    incedentDict[key].push(element);
  }

  return incedentDict;
};

export const generateFamily = (apartment) => {
  let value = apartment.people;
  apartment.surname = value[0] ? value[0].surname : null;
  apartment.persons = value;
  return apartment;
};
