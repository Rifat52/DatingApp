import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registermode = false;
  //values: any;
  constructor(private  http: HttpClient) { }

  ngOnInit() {
    //this.getValues();
  }

//   getValues() {
//   this.http.get('http://localhost:5000/api/values').subscribe(response => {
//   this.values = response;
// }, error => { console.log(error); }
// );
// }
  registerToggle() {
    this.registermode = true;
  }

  cancelRegisterMode(registermode: boolean) {
    this.registermode = registermode;
  }
}