import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
    title:{type:String,required:true},
    department:{type:String,required:true},
    description:{type:String,required:true},
    requirements:{type:String,required:true},
    location:{type:String,required:true},
    postedDate:{type:String,required:true},
    status:{type:String,default:"Open"}


})

export default mongoose.models.Job || mongoose.model('Job', JobSchema);