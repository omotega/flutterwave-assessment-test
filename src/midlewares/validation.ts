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

// const validate =
//   (schema: { body?: Object; query?: ObjectSchema<any>; params?: Object }) =>
//   (req: express.Request, _: express.Response, next: Function) => {
//     const validSchema = pick(schema, ['params', 'query', 'body']);
//     const object = pick(req, Object.keys(validSchema));
//     const { value, error } = Joi.compile(validSchema)
//       .prefs({ errors: { label: 'key' } })
//       .validate(object);

//     if (error) {
//       const errorMessage = error.details
//         .map((details: { message: string }) => details.message)
//         .join(', ');
//       return next(new AppError(httpStatus.BAD_REQUEST, errorMessage));
//     }
//     Object.assign(req, value);
//     return next();
//   };

export default createAccountMiddleware;
