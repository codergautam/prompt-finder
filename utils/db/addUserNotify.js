import { Notify } from "./init";

export default async function addNewNotifyUser(email) {
  try {
  await Notify.updateOne({ email: email }, { $set: { email: email, createdAt: Date.now() } }, { upsert: true });
  } catch (error) {
    console.log(error);
  }
}
