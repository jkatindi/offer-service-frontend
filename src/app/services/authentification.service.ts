import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {jwtDecode} from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  accessToken!: any;
  isAuthenticated: boolean=false;
  roles : any;
  username: any;
  constructor(private  http: HttpClient) { }

  public  login(username: string, password: string){
    let options={
      headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
    }
    let params=new HttpParams()
      .set("username",username)
      .set("password",password)
     return this.http.post("http://localhost:8087/auth/login",params,options)
  }


  loadProfile(data: any) {
    this.isAuthenticated=true;
    this.accessToken=data['access-token'];
    let decodedJwt = jwtDecode(this.accessToken);
    this.username=decodedJwt.sub
    console.log(decodedJwt)
  }
}
