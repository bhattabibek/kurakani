import mongoose from 'mongoose';
import { type } from 'os';

const userSchema = mongoose.Schema({
email:{
  type:String,
  required:true,
  unique:true,
},
fullname:{
  type:String,
  required:true,

},
password:{
  type:String,
  required:true,
  minlength:6
},
profilePic:{
  type:String,
  default:""
}

});
const user = mongoose.model("User",userSchema);
export default user;