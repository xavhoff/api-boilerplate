import { Logger } from "winston";
import express, { Request, Response, NextFunction } from "express";
import http from "http";
import passport from "passport";

interface ErrorMessage extends Error {
  status?: number;
}

export default class Server {
  app: express.Application = express();

  server: http.Server;

  port: number = 8888;

  logger: Logger;

  constructor(logger: Logger) {
    this.server = this.run();
    this.logger = logger;
  }

  public run(): http.Server {
    this.app.use(passport.initialize());

    // catch 404 and forward to error handler
    this.app.use((req, res, next) => {
      const err: ErrorMessage = new Error("Not Found");
      err.status = 404;
      next(err);
    });

    // Errors handler
    this.app.use(
      (err: ErrorMessage, req: Request, res: Response, next: NextFunction) => {
        res.status(err.status || 500);

        res.json({
          errors: {
            message: err.message,
            error: err,
          },
        });
      }
    );

    return this.app.listen(this.port, () => {
      this.logger.info(`API  up and running on port ${this.port}`);
    });
  }
}
