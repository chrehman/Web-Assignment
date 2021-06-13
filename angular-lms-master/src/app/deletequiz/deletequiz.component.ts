import { Component, OnInit } from '@angular/core';
import{TeacherService} from '../teacher.service';

@Component({
  selector: 'app-deletequiz',
  templateUrl: './deletequiz.component.html',
  styleUrls: ['./deletequiz.component.css']
})
export class DeletequizComponent implements OnInit {

  quizzes=[]
  quizReceived=false
  tid=''
  constructor(private _data:TeacherService) { }

  ngOnInit(): void {
  this.loader()
  this.getQuizzes()
  }

  loader(){
    
    var currentUser = JSON.parse(localStorage.getItem("user"));
    // console.log("Current User",currentUser)
    this.tid=currentUser._id
    // console.log(this.tid)
    }

    getQuizzes(){
      let ret;
      this._data.viewQuizzes().subscribe(
        data => { ret=data},
        err => console.error(err),
        () => {
          // console.log('tid',this.tid)
          // let data=JSON.parse(ret)
          // console.log(ret._id)
          alert("Quiz received Successfully");

          console.log("DATA",ret)
          ret.map((ret)=>{
              // console.log(ret.teacher)
              let teacher=ret.teacher
              // console.log(teacher._id)
              if(this.tid===teacher._id){
                  this.quizzes.push(ret)
                  this.quizReceived=true
              }

          })
          // this.quizzes=ret
        })
      }

      remQuiz(i){
        console.log(this.quizzes[i])
        let ret;
      this._data.deleteQuiz(this.quizzes[i]._id).subscribe(
        data => { ret=data},
        err => console.error(err),
        () => {
          // let data=JSON.parse(ret)
          // console.log(ret._id)
          alert("Quiz deleted Successfully");
          console.log("DATA",ret)
          this.quizzes=[]
          this.quizReceived=false
          this.getQuizzes()
          
          // this.quizzes=ret
        })
      }
  }
