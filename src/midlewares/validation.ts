import { Request, Response, NextFunction } from "express";
import accountvalidation from "../validation/accountvalidation";
import httpStatus from "http-status";

const createAccountMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const validate = accountvalidation.createAccountValidation(payload);
  if (validate.error)
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: validate.error?.details[0].message });
  next();
};

const getAccountMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const payload = req.body;
  const validate = accountvalidation.getAccount(payload);
  if (validate.error)
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ message: validate.error?.details[0].message });
  next();
};

export default {
  createAccountMiddleware,
  getAccountMiddleware,
};
