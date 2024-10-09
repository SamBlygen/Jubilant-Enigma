import mongoose from "mongoose";
import bcrypt from 'bcryptjs';



const userSchema = new mongoose.Schema(
  
  {
name: {
  type: String,
  required: true
}, 
email: {
  type: String,
  required: true, 
  unique: true,

},
password: {
  type: String,
  required: true,
},
  },
{
  timestamps: true,
}

);

userSchema.pre('save', function(next) {
  console.log('pre save password: ' + this.password);
  if (this.isModified('password')) 
      this.password = this.encryptPassword(this.password);
  next();
})

const salt = await bcrypt.genSalt(8);
this.password = await bcrypt.hash(this.password, salt);
next();

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

export default User;
