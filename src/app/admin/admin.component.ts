import { Component, NgModule, OnInit } from '@angular/core';
import { Route, Router, RouterOutlet } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  constructor(private auth:AuthentificationService,private router: Router){}
  ngOnInit(): void {
    if(!this.auth.isAuthenticated){
      this.router.navigateByUrl("/login")
    }
  }

}
