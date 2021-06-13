import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from 'protractor';
import { text } from '@fortawesome/fontawesome-svg-core';
const httpOptions = {
  headers: new HttpHeaders({
    'content-type':'application/json',
    'Authorization':`Bearer ${JSON.parse(localStorage.getItem('id_token'))}`,
    responseType: 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
  

  export class TeacherService {
    baseUrl="http://localhost:3000/teacher/";
      constructor(private http:HttpClient) {  }
       
      createQuiz(quiz){
        let body=JSON.stringify(quiz);
        let url=this.baseUrl+ "createQuiz";
        return this.http.post(url,body,httpOptions);
      }
      
      addQuiz(qid,quiz){
        let body=JSON.stringify(quiz);
        let url=this.baseUrl+ "addQuiz/"+qid;
        return this.http.put(url,body,httpOptions);
      }

      viewQuizzes(){
        let url=this.baseUrl+ "viewQuiz";
        return this.http.get(url,httpOptions);
      }
      
      deleteQuiz(qid){
        let url=this.baseUrl+ "deleteQuiz/"+qid;
        return this.http.delete(url,httpOptions);
      }
      }
    
