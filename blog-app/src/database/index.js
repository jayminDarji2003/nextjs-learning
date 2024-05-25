import mongoose from "mongoose";

const connectToDB = async () => {
    const dbUrl = "mongodb+srv://blogapp:nextblogapp@cluster0.l0spibq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

    mongoose.connect(dbUrl)
        .then(() => console.log("Connected to blog database"))
        .catch(error => console.log("Error while connected to db : ", error))
}

export default connectToDB;