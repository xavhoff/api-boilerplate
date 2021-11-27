import { NextFunction, Request, Response } from "express";
import passport from "passport";
import {
  ExtractJwt,
  Strategy as JwtStrategy,
  StrategyOptions,
} from "passport-jwt";

const encryptionKey = "SECRET_KEY_ZZ";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: encryptionKey,
};
passport.use(
  new JwtStrategy(opts, (jwtPayload, done) => {
    const { username, role } = jwtPayload;
    return done(null, { username, role });
  })
);

export default passport;

// eslint-disable-next-line no-shadow
export enum Role {
  ADMIN = "admin",
  USER = "user",
}

export const HasRole = (role: Role[]) => {
  // eslint-disable-next-line no-return-assign
  return (req: Request, res: Response, next: NextFunction) => {
    const { role: userRole } = req?.user as any;
    if (!role.includes(userRole)) throw Error("Insufficient rights");
    else next();
  };
};
