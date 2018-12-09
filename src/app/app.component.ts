import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyCm4IrOM0XMQAA-26OE7uyM5EzP4HXkTPI",
      authDomain: "instagram-4b834.firebaseapp.com",
      databaseURL: "https://instagram-4b834.firebaseio.com",
      projectId: "instagram-4b834",
      storageBucket: "instagram-4b834.appspot.com",
      messagingSenderId: "726246956477"
    };
    firebase.initializeApp(config);
  }

}
