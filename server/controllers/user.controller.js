import User from "../models/user.model";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";
import formidable from "formidable";
import csvModel from "../models/csv.model";
import appointmentModel from "../models/appointment.model";
import moment from "moment";
const csvtojson = require("csvtojson");
const create = async (req, res) => {
  console.log("reqbody=", req.body);
  const user = new User(req.body);
  try {
    await user.save();
    return res.status(200).json({
      message: "Successfully signed up!",
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

/**
 * Load user and append to req.
 */
const userByID = async (req, res, next, id) => {
  try {
    let user = await User.findById(id);
    if (!user)
      return res.status("400").json({
        error: "User not found",
      });
    req.profile = user;
    next();
  } catch (err) {
    return res.status("400").json({
      error: "Could not retrieve user",
    });
  }
};

const read = (req, res) => {
  req.profile.hashed_password = undefined;
  req.profile.salt = undefined;
  return res.json(req.profile);
};

const list = async (req, res) => {
  try {
    let users = await User.find().select("name email role updated created");
    res.json(users);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const update = async (req, res) => {
  try {
    let user = req.profile;
    user = extend(user, req.body);
    user.updated = Date.now();
    await user.save();
    user.hashed_password = undefined;
    user.salt = undefined;
    res.json(user);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const remove = async (req, res) => {
  try {
    let user = req.profile;
    let deletedUser = await user.remove();
    deletedUser.hashed_password = undefined;
    deletedUser.salt = undefined;
    res.json(deletedUser);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const fileUpload = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  let tempCsv = [];
  csvModel
    .remove({})
    .then((del) => console.log("del==", del))
    .catch((err) => console.log(err));
  // appointmentModel
  //   .remove({})
  //   .then((del) => console.log("delete=", del))
  //   .catch((err) => console.log(err));
  form.parse(req, async (err, fields, files) => {
    console.log("fiels=", files.File.path);
    csvtojson()
      .fromFile(files.File.path)
      .then((csvData) => {
        console.log(csvData);

        csvData.map((item, index) => {
          const csv = new csvModel();
          console.log("item=", item);
          csv.Name = item.Name;
          csv.Timezone = item.Timezone;
          csv.Day_of_Week = item["Day of Week"];
          csv.Available_at = item["Available at"];
          csv.Available_until = item["Available until"];
          csv
            .save()
            .then((csv) => {
              console.log(csv);
              // tempCsv.push(csv);
              res.json("Success");
            })
            .catch((err) => {
              console.log(err);
              res.status(400).json({ message: "Error is caused" });
            });
        });
        // res.status(200).json(tempCsv);
      });
    // csvModel
    //   .find()
    //   .then((csvs) => res.status(200).json(csvs))
    //   .catch((err) => res.status(400).json(err));
  });
  // tempCsv.map((item, index) => {

  // });
  // console.log("fields==", fields);
  // if (err) {
  //   return res.status(400).json({
  //     error: "Flie could not be uploaded",
  //   });
  // }
  // // let post = new Post(fields);
  // post.postedBy = req.profile;
  // if (files.photo) {
  //   post.photo.data = fs.readFileSync(files.photo.path);
  //   post.photo.contentType = files.photo.type;
  // }
  // try {
  //   let result = await post.save();
  //   res.json(result);
  // } catch (err) {
  //   return res.status(400).json({
  //     error: errorHandler.getErrorMessage(err),
  //   });
  // }
};

const getCsv = async (req, res) => {
  try {
    let csvs = await csvModel.find();
    res.json(csvs);
  } catch (err) {
    return res.status(400).json({ error: "there is not csv" });
  }
};
const getMentorInfo = async (req, res) => {
  // console.log("req===", req);
  try {
    let user = req.params.userName;
    let users = await csvModel.find({ Name: user });
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};
const addTime = async (req, res) => {
  try {
    console.log("time=======", moment(req.body.date).format("dddd"));
    let appoint = new appointmentModel();
    appoint.email = req.body.email;
    appoint.Timezone = req.body.mentor[0].Timezone;
    appoint.week = moment(req.body.date).format("dddd");
    appoint.appointmentTime = req.body.appointmentTIme;
    appoint.mentorName = req.body.mentor[0].Name;
    let appoints = await appoint.save();
    res.json(appoints);
  } catch (err) {
    console.log(err);
  }
};

const getAppointment = async (req, res) => {
  try {
    let appoints = await appointmentModel.find();
    res.json(appoints);
  } catch (err) {
    console.log(err);
  }
};
const getMyAppoint = async (req, res) => {
  console.log("my====", req.params.val);
  try {
    let appoints = await appointmentModel.find({ email: req.params.val });
    res.json(appoints);
  } catch (err) {
    console.log(err);
  }
};

export default {
  create,
  userByID,
  read,
  list,
  remove,
  update,
  fileUpload,
  getCsv,
  getMentorInfo,
  addTime,
  getAppointment,
  getMyAppoint,
};
