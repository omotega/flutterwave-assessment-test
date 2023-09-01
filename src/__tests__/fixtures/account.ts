import { faker } from "@faker-js/faker";

export const accountdataOne = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: "1993-12-31",
  initialBalance: faker.commerce.price(),
};

export const accountdataTwo = {
  accountType: "savings",
  dateOfBirth: "1977-10-29",
  initialBalance: faker.commerce.price(),
};

export const accountdataThree = {
  accountName: faker.person.fullName(),
  dateOfBirth: "1970-05-12",
  initialBalance: faker.commerce.price(),
};

export const accountdataFour = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  initialBalance: faker.commerce.price(),
};

export const accountdataFive = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: "19780-06-10",
  initialBalance: faker.commerce.price(),
};

export const accountdataSix = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: "1979-07-02",
  initialBalance: -(faker.commerce.price()),
};


export const accountdataSeven = {
  accountName: faker.person.fullName(),
  accountType: "savings",
  dateOfBirth: "1960-09-08",
};



