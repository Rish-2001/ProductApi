const mongoose =require("mongoose");

const connectDB = async (mongoURL) => {
    try {
      await mongoose.connect(mongoURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      });
      console.log('Mongo DB connection successfully');
    } catch (error) {
      console.error('Mongo DB connection failed:', error);
      throw error;
    }
  };

  module.exports=connectDB;