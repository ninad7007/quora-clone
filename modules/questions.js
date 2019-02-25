var mongoose=require("mongoose");
var questionSchema=new mongoose.Schema({
    user: String,
    question: String,
    answers: [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Answer"
    }]
});

module.exports=mongoose.model("Question",questionSchema);