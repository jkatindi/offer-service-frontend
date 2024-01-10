import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthentificationService} from "../services/authentification.service";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAuthenticated: boolean=false;
  roles : any;
  username: any;
  formLogin!: FormGroup;
  constructor(private fb: FormBuilder,private  authService: AuthentificationService) { }

  ngOnInit(): void {
    this.formLogin=this.fb.group({
      username : this.fb.control(""),
      password : this.fb.control("")
    })
  }

  handleConnexion() {
    let username=this.formLogin.value.username
    let password=this.formLogin.value.password

    this.authService.login(username,password)
      .subscribe({
        next: data => {
           this.authService.loadProfile(data)
        },
        error: err => {
          console.log(err)
        }
      })

  }
}
