// import mongoose from "mongoose";

// const dbConnect = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGODB_URL);
//         console.log("connected to database")
//     } catch (error) {
//         console.log(error.message);
//         console.log("error occured while connecting to database");
//     }
// }

// export default dbConnect;


import mongoose from "mongoose";

const dbConnect = async () => {
    if (mongoose.connections[0].readyState) {
        // Use the existing database connection
        console.log("Already connected to database");
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to database");
    } catch (error) {
        console.error("Error occurred while connecting to database:", error.message);
    }
};

export default dbConnect;
