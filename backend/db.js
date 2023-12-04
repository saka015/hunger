import mongoose from "mongoose";

const mongoURI =
  "mongodb+srv://saka015:saka123@cluster0.6y2itcv.mongodb.net/mernfoodapp?retryWrites=true&w=majority";

const connect = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("DB connected");

    const fetched_data = await mongoose.connection.db.collection("foodapp"); // food items

    fetched_data.find({}).toArray(function (err, data) {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } catch (e) {
    console.error("Error connecting to the database:", e.message);
  }
};

export default connect;
