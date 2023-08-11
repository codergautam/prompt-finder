// utils/db/mongoInit.js
import mongoose from 'mongoose';
import { config } from 'dotenv';
config();

const MONGO_URI = process.env.MONGODB_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((res) => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log(err);
});

// Define MongoDb schemas
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const notifySchema = new mongoose.Schema({
  id: ObjectId,
  createdAt: Number,
  email: String,
});

const Notify = mongoose.models.Notify ?? mongoose.model('Notify', notifySchema);

export { Notify, mongoose };