import mongoose from "mongoose";

const connectToDB = async () => {
    const dbUrl = "mongodb+srv://jaymindarji2003:LCblvi4Y79gdFpA5@cluster0.sfozgea.mongodb.net/"

    mongoose.connect(dbUrl)
        .then(() => console.log("Connected to blog database"))
        .catch(error => console.log("Error while connected to db : ", error))
}

export default connectToDB;