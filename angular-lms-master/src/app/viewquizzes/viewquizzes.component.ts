import { Component, OnInit } from '@angular/core';
import{TeacherService} from '../teacher.service';

@Component({
  selector: 'app-viewquizzes',
  templateUrl: './viewquizzes.component.html',
  styleUrls: ['./viewquizzes.component.css']
})
export class ViewquizzesComponent implements OnInit {

  
  quizzes=[]
  tid=''
  quizReceived=false
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
}
