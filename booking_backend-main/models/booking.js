const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
  id_maker: {
    type:   mongoose.Schema.Types.ObjectId,
    trim: true,
    required: true,
   
  },
  
  room: {
    type: Number,
    required: true,
  },
 emails: {
    type: Array,
    default: [],
    required: true,
  },
 
  phones: {
    type: Array,
    default: [],
    required: true,
  },
  paid : {type : Boolean,
    default : false},
  

},

{ timestamps: true });

module.exports =Booking = model("booking", bookingSchema);