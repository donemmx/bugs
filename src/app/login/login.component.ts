import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase  from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router 
    ) { }

  ngOnInit() { }

  Google() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
 
  Email() {
    this.afAuth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }

}
