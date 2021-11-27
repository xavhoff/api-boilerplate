import { Router } from "express";
import passport from "passport";
import { UserController } from "../controllers";
import { HasRole, Role } from "../auth";

export default function getUsersRoutes(userController: UserController) {
  const router = Router();

  router.get(
    `/`,
    passport.authenticate("jwt", { session: false }),
    HasRole([Role.ADMIN]),
    userController.getUserList
  );

  router.delete(
    `/:id`,
    passport.authenticate("jwt", { session: false }),
    HasRole([Role.ADMIN]),
    userController.removeUser
  );

  router.patch(
    `/:id/edit`,
    passport.authenticate("jwt", { session: false }),
    HasRole([Role.ADMIN]),
    userController.editUser
  );

  router.patch(
    `/:id/edit-password`,
    passport.authenticate("jwt", { session: false }),
    HasRole([Role.ADMIN]),
    userController.editUserPassword
  );

  router.post(
    `/`,
    passport.authenticate("jwt", { session: false }),
    HasRole([Role.ADMIN]),
    userController.createUser
  );

  return router;
}
