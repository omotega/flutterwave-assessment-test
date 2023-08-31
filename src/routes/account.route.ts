import accountcontroller from "../controller/accountcontroller";
import { Router } from "express";
import createAccountMiddleware from "../midlewares/validation";

const accountRouter = Router();

accountRouter.post(
  "/createaccount",
  createAccountMiddleware,
  accountcontroller.createAccount
);

export default accountRouter;
