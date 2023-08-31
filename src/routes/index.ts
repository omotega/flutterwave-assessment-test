import { Router, Request, Response, NextFunction } from "express";
import accountRouter from "./account.route";
import { errorHandler } from "../midlewares/errors/errorhandler";

const route = Router();

route.use("/account", accountRouter);

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("Error encountered:", err.message || err);

  next(err);
});

route.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  errorHandler.handleError(err, res);
});

export default route;
