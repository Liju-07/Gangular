import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 
  user:any;
  loggedIn:any;

  constructor(private authService: SocialAuthService,private route:Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      localStorage.setItem("name",user.name)
      localStorage.setItem("photoUrl",user.photoUrl)
      localStorage.setItem("email",user.email)
      localStorage.setItem("token",user.idToken)
      this.route.navigate(['/home'])
      console.log(this.user)
    });
  }
}
