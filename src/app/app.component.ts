import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'instagramLike';
  ngOnInit() {


    const firebaseConfig = {
      apiKey: "AIzaSyCX8NfkhuVyWUJl32EDxhbb2xy4nleA2Kc",
      authDomain: "instagramlike-b0330.firebaseapp.com",
      databaseURL: "https://instagramlike-b0330.firebaseio.com",
      projectId: "instagramlike-b0330",
      storageBucket: "instagramlike-b0330.appspot.com",
      messagingSenderId: "561023647486",
      appId: "1:561023647486:web:8cb696d414a8aff1df6faf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}