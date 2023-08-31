import { faker } from "@faker-js/faker";


export const accountdataOne = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: faker.date.anytime(),
};

export const accountdataTwo = {
  accountType: "savings",
  dateOfBirth: {
    month: faker.date.month().toLowerCase(),
    date: faker.date.birthdate().getDay(),
    year: faker.date.birthdate().getFullYear(),
  },
};

export const accountdataThree = {
  accountName: faker.person.fullName(),
  dateOfBirth: {
    month: faker.date.month().toLowerCase(),
    date: faker.date.birthdate().getDay(),
    year: faker.date.birthdate().getFullYear(),
  },
};

export const accountdataFour = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: {
    date: faker.date.birthdate().getDay(),
    year: faker.date.birthdate().getFullYear(),
  },
};

export const accountdataFive = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: {
    month: faker.date.month().toLowerCase(),
    year: faker.date.birthdate().getFullYear(),
  },
};

export const accountdataSix = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: {
    month: faker.date.month().toLowerCase(),
    date: faker.date.birthdate().getDay(),
  },
};

