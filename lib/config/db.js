import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://shanmugapriyaar0:h9HuErHekEQ8GdCW@cluster0.ons2j.mongodb.net/blog-app');
    console.log("DB Connected");
}