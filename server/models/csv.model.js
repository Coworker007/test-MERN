import mongoose from "mongoose";
const CsvSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Timezone: {
    type: String,
    required: true,
  },
  Day_of_Week: {
    type: String,
    required: true,
  },
  Available_at: {
    type: String,
    required: true,
  },
  Available_until: {
    type: String,
    required: true,
  },
});
export default mongoose.model("Csv", CsvSchema);
