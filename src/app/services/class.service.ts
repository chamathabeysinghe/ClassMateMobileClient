import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ClassService{
  http:any;
  baseUrl="http://localhost:3000";

  constructor(http:Http){
    this.http=http;
  }

  getClasses() {

    const authenticatedContentHeaders = new Headers();
    authenticatedContentHeaders.append('Accept', 'application/json');
    authenticatedContentHeaders.append('Content-Type', 'application/json');
    var token=localStorage.getItem('id_token');
    authenticatedContentHeaders.append('Authorization',token);
    
    let headers = authenticatedContentHeaders;
    console.log("Came to this point");
    return this.http.get(this.baseUrl + '/api/get-class', {headers: headers}).map(res=>res.json());
  }

  getLectures(id){

    const authenticatedContentHeaders = new Headers();
    authenticatedContentHeaders.append('Accept', 'application/json');
    authenticatedContentHeaders.append('Content-Type', 'application/json');
    var token=localStorage.getItem('id_token');
    authenticatedContentHeaders.append('Authorization',token);
    
    let headers = authenticatedContentHeaders;
    return this.http.get(this.baseUrl + '/api/get-lectures/' + id,{headers:headers}).map(res=>res.json());
  }

  createFeedback(feedback){
    const authenticatedContentHeaders = new Headers();
    authenticatedContentHeaders.append('Accept', 'application/json');
    authenticatedContentHeaders.append('Content-Type', 'application/json');
    var token=localStorage.getItem('id_token');
    authenticatedContentHeaders.append('Authorization',token);
    
    let header=authenticatedContentHeaders;
    return this.http.post(this.baseUrl+'/api/feedback/create-feedback',JSON.stringify(feedback),{headers:header}).map(res=>res.json());
  }
  
}
