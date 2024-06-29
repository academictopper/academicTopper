
import mongoose from "mongoose";

export function connect() {
  mongoose.connect('mongodb+srv://academictopper7:ac3NxqrycoR93Vw2@academic-topper.g7zhgbz.mongodb.net/',{
    tls: true,
    ssl: true,
  })
  .then(() => console.log('db connected'))
  .catch((err:any) => console.log(err));
}