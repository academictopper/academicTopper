
import mongoose from "mongoose";

export function connect() {
  mongoose.connect(process.env.MONGODB_URL!,{
    tls: true,
    ssl: true,
  })
  .then(() => console.log('db connected'))
  .catch((err:any) => console.log(err));
}