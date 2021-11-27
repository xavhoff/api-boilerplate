import winston, { Logger } from "winston";
import Server from "./server";
import winstonLogger from "./logger";

(() => {
  // Initialize logger
  const logger: Logger = winstonLogger();
  // If we're not in production then log to the `console` with the format:
  // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
  //
  if (process.env.NODE_ENV !== "production") {
    logger.add(
      new winston.transports.Console({
        format: winston.format.simple(),
      })
    );
  }
  const api = new Server(logger);
})();
