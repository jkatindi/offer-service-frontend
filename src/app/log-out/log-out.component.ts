import {Component, OnInit} from '@angular/core';
import {AuthentificationService} from "../services/authentification.service";
import {Router} from "@angular/router";
import {jwtDecode} from "jwt-decode";


@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.css'
})
export class LogOutComponent  implements  OnInit{
  token!: any;
    constructor(protected  auth: AuthentificationService,private router:Router){

    }
    ngOnInit(): void {
       this.token=jwtDecode(this.auth.accessToken);

    }

  desconnect(){
    this.auth.accessToken=undefined;
    this.auth.isAuthenticated=false;
    this.router.navigateByUrl("/login");


  }
}
