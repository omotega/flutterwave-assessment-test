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
import { ACCOUNT_CREATION_SUCCESS } from "../../utils/message";

const api = supertest(app);

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
    expect(body).toHaveProperty("message");
    expect(body.message).toBe(ACCOUNT_CREATION_SUCCESS);
    expect(body.data).toHaveProperty("_id");
    expect(body.data).toHaveProperty("balance");
    expect(body.data).toMatchObject({
      accountName: data.accountName,
      accountType: data.accountType,
      dateOfBirth: {
        month: data.dateOfBirth.month,
        date: data.dateOfBirth.date,
        year: data.dateOfBirth.year,
      },
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

  test("shouuld return error message if month is not passed", async () => {
    const data = accountdataFour;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.BAD_REQUEST);
    expect(body).toHaveProperty("message");
    expect(body.message).toBe('Month is required!');
  });

  test("shouuld return error message if date is not passed", async () => {
    const data = accountdataFive;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.BAD_REQUEST);
    expect(body).toHaveProperty("message");
    expect(body.message).toBe('date  is required!');
  });

  test("shouuld return error message if date is not passed", async () => {
    const data = accountdataSix;
    const { body } = await api
      .post("/api/account/createaccount")
      .send(data)
      .expect(httpStatus.BAD_REQUEST);
    expect(body).toHaveProperty("message");
    expect(body.message).toBe('"Year" is required.');
  });
});
