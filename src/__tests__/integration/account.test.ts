import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../../app";
import mongoose from "mongoose";
import supertest from "supertest";
import {
  accountdataFive,
  accountdataFour,
  accountdataOne,
  accountdataSix,
  accountdataThree,
  accountdataTwo,
} from "../fixtures/account";
import httpStatus from "http-status";
import {
  ACCOUNT_CREATION_SUCCESS,
  ACCOUNT_NOT_FOUND,
} from "../../utils/message";
import { generateAccountNumber } from "../../utils/helper";

const api = supertest(app);

let accountDetails: any;
beforeAll(async () => {
  const mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});
afterAll(async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
});

describe("POST /api/account/createaccount", () => {
  test("should return user payload and statusCode 200 when account is succesfully created", async () => {
    const data = accountdataOne;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.CREATED);
    accountDetails = body.data;
    expect(body).toHaveProperty("message");
    expect(body.message).toBe(ACCOUNT_CREATION_SUCCESS);
    expect(body.data).toHaveProperty("_id");
    expect(body.data).toHaveProperty("balance");
    expect(body.data).toHaveProperty("accountNumber");
    expect(body.data).toMatchObject({
      accountName: data.accountName,
      accountType: data.accountType,
      dateOfBirth: data.dateOfBirth,
      balance: 0,
    });
  });
  test("shouuld return error message if accountName is not passed", async () => {
    const data = accountdataTwo;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.BAD_REQUEST);
    expect(body).toHaveProperty("message");
    expect(body.message).toBe('"account name" is required.');
  });

  test("shouuld return error message if account type is not passed", async () => {
    const data = accountdataThree;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.BAD_REQUEST);
    expect(body).toHaveProperty("message");
    expect(body.message).toBe('"Account type" is required!');
  });

  test("shouuld return error message if dob is not passed", async () => {
    const data = accountdataFour;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.BAD_REQUEST);
    expect(body).toHaveProperty("message");
    expect(body.message).toBe('"date of birth  is required!"');
  });
});

describe("POST /api/account/getaccount", () => {
  test("should return account details if account number is valid", async () => {
    const data = {
      accountNumber: accountDetails.accountNumber,
    };
    const { body, error } = await api
      .get("/api/account/getaccount")
      .send(data)
      .expect(httpStatus.OK);

    expect(body.data).toMatchObject({
      accountName: accountDetails.accountName,
      accountType: accountDetails.accountType,
      accountNumber: data.accountNumber,
      dateOfBirth: accountDetails.dateOfBirth,
      balance: accountDetails.balance,
    });
  });

  test("should return error if account number is not valid", async () => {
    const data = {
      accountNumber: generateAccountNumber(),
    };
    const { body } = await api
      .get("/api/account/getaccount")
      .send(data)
      .expect(httpStatus.NOT_FOUND);

    expect(body).toHaveProperty("message");
    expect(body.message).toBe(ACCOUNT_NOT_FOUND);
  });

  describe("GET /api/account/getallaccounts", () => {
    test("should return all the accounts and statuscode 200", async () => {
      const { body } = await api
        .get("/api/account/getallaccounts")
        .expect(httpStatus.OK);

      expect(body.data.limit).toBe(10);
    });
  });
});
