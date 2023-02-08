import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {




  name = localStorage.getItem("name")
  photoUrl = localStorage.getItem("photoUrl")
  email = localStorage.getItem("email")
 
  loggedIn: any;
  user: any
  constructor(private route: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  logout() {
    
    localStorage.setItem("token","")
    this.authService.signOut();
    this.route.navigate(['/login'])
    
  }

}
