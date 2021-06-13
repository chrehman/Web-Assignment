import { Component, OnInit } from '@angular/core';
import{TeacherService} from '../teacher.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addquiz',
  templateUrl: './addquiz.component.html',
  styleUrls: ['./addquiz.component.css']
})
export class AddquizComponent implements OnInit {

  quizCreated:boolean=false
  tid:String=""
  qid:String=""
  quizName:String=""
  totalquestions:number;//Interpolation
  question:string="";//Two way databinding
  option:string="";//Two way databinding
  answer:string="";//Two way databinding

  options=[];//For Event Binding
  constructor(private router: Router,private _data:TeacherService) { }

  ngOnInit() {
    this.loader()    
  }

  loader(){
    
  var currentUser = JSON.parse(localStorage.getItem("user"));
  // console.log("Current User",currentUser)
  this.tid=currentUser._id
  // console.log(this.tid)
  }
createQuiz(){
  // console.log("Create")
  if(this.quizName.length==0){
    alert("Please enter quiz name")
    return
  }
  var ret;
  let quiz={
    name:this.quizName,
    teacher:this.tid
  };
this._data.createQuiz(quiz).subscribe(
  data => { ret=data},
  err => console.error(err),
  () => {
    console.log('Quiz Created')
    // let data=JSON.parse(ret)
    console.log(ret._id)
    this.qid=ret._id
    this.totalquestions=ret.quiz.length
    alert("Quiz created Successfully");
    this.quizName='';
    this.quizCreated=true
    console.log("DATA",ret)
  }
  );
  

}
  
addOption(){
  // console.log("Add")
  this.options.push(this.option)
  this.option=''
}

addQuiz(){
  // console.log("Add QUiz")
  if(this.question.length==0){
    alert("Please enter name of question")
    return
  }
  if(this.answer.length==0){
    alert("Please enter correct option")
    return
  }
  if(this.options.length==0){
    alert("Please add options")
    return
  }
  var ret;
  let quiz={
    question:this.question,
    options:this.options,
    answer:this.answer
  };
this._data.addQuiz(this.qid,quiz).subscribe(
  data => { ret=data},
  err => console.error(err),
  () => {
    console.log('Question Added')
    // let data=JSON.parse(ret)
    console.log(ret)
    this.totalquestions=ret.quiz.length
  }
  );
  alert("Question added Successfully");
  this.question='';
  this.option=''
  this.options=[]
  this.answer=''
  // console.log("DATA",ret)
}

endQuiz(){
  this.router.navigateByUrl('/viewQuizzes')
}
remOption(i){
  this.options.splice(i,1);
  }

}
