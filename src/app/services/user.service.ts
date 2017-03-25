import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService{
  http:any;
  baseUrl="http://localhost:3000/api";

constructor(http:Http){
    this.http=http;
  }

  getPosts(category,limit){
    return this.http.get(this.baseUrl+'/'+category+'/top.json?limit='+limit)
      .map(res=>res.json());
  }

 

  logUser(username,password){
    const contentHeaders = new Headers();
    contentHeaders.append('Accept', 'application/json');
    contentHeaders.append('Content-Type', 'application/json');

    let body = JSON.stringify({ email:username, password:password });
    return this.http.post(this.baseUrl+'/authenticate', body, { headers: contentHeaders }).map(res=>res.json());

  }
}
