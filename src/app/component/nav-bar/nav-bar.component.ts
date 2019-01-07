import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  user: firebase.User;

  constructor(private atAuth: AngularFireAuth) {
    atAuth.authState.subscribe(user => (this.user = user));
  }

  logOut() {
    this.atAuth.auth.signOut();
  }
}
