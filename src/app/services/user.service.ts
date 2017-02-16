import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService{
  http:any;
  baseUrl:string;

  

constructor(http:Http){
    this.http=http;
    this.baseUrl='https://www.reddit.com/r';

  }

  getPosts(category,limit){
    return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
      .map(res=>res.json());
  }

 

  logUser(email,password){
      console.log("In the log user fuction");
      var headers=new Headers();
      var user={emial:email,password:password};
      headers.append('Content-Type','application/json');
      return this.http.post('http://localhost:3000/api/authenticate',JSON.stringify(user),{headers:headers}).map(res=>res.json());

  }
}
