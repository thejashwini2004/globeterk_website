import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    tourName:{
        type:String,
        require:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    id:{
      type:Number,
      required:true,
    },
    guestSize:{
        type:Number,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    book_Now:{
        type:Date,
        required:true
    },

  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
