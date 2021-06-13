var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var quizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'Teacher'
    },
    quiz: {
        type: [{
            question: {
                type: String,
            },
            options:[{type:String}],
            answer:{type:String}
        }]
    }
});

module.exports = mongoose.model('Quiz', quizSchema);