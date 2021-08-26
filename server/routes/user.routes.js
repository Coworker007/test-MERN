import express from "express";
import userCtrl from "../controllers/user.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

router.route("/api/users").get(userCtrl.list).post(userCtrl.create);

router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.route("/api/upload").post(userCtrl.fileUpload);
router.route("/api/getCsv").get(userCtrl.getCsv);
router.route("/api/mentorInfo/:userName").get(userCtrl.getMentorInfo);
router.route("/api/addTime").post(userCtrl.addTime);
router.route("/api/getAppointment").get(userCtrl.getAppointment);
router.route("/api/getMyAppoint/:val").get(userCtrl.getMyAppoint);

router.param("userId", userCtrl.userByID);

export default router;
