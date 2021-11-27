/* eslint-disable class-methods-use-this */
import { Logger } from "winston";
import { Request, Response } from "express";

export default class UserController {
  logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  getUserList = async (req: Request, res: Response) => {
    const data = "";
    return res.status(200).json(data);
  };

  removeUser = async (req: Request, res: Response) => {
    const data = "";
    return res.status(200).json(data);
  };

  editUser = async (req: Request, res: Response) => {
    const data = "";
    return res.status(200).json(data);
  };

  editUserPassword = async (req: Request, res: Response) => {
    const data = "";
    return res.status(200).json(data);
  };

  createUser = async (req: Request, res: Response) => {
    const data = "";
    return res.status(200).json(data);
  };
}
