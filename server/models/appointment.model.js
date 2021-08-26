import mongoose from "mongoose";
const AppointmentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  Timezone: {
    type: String,
    required: true,
  },
  week: {
    type: String,
    required: true,
  },
  appointmentTime: {
    type: String,
    required: true,
  },
  mentorName: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default: new Date(),
  },
  //   Day_of_Week: {
  //     type: String,
  //     required: true,
  //   },
  //   Available_at: {
  //     type: String,
  //     required: true,
  //   },
  //   Available_until: {
  //     type: String,
  //     required: true,
  //   },
});
export default mongoose.model("Appontment", AppointmentSchema);
