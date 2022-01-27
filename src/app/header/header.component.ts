import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth!: boolean;
  constructor(private authService: AuthService,
    private fireAuth: AngularFireAuth) { }

  ngOnInit(): void {
    this.fireAuth.onAuthStateChanged(
      (user)=>{
        if(user){
          this.isAuth=true;
        }else{
          this.isAuth=false;
        }
      }
    );
  }
  onSignOut(){
    this.authService.signOutUser();
  }

}
