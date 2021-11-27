import winston from "winston";

export = () =>
  winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "api" },
    transports: [
      //
      // - Write all logs with level `error` and below to `error.log`
      // - Write all logs with level `info` and below to `combined.log`
      //
      new winston.transports.File({
        filename: "logs/error.log",
        level: "error",
      }),
      new winston.transports.File({ filename: "logs/combined.log" }),
    ],
  });

//
