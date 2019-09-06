import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggeddIn: boolean = false;

  constructor() { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged(userData => {
      if (userData && userData.emailVerified) {
        this.isLoggeddIn = true;
      } else {
        this.isLoggeddIn = false;
      }
    })
  }

}
