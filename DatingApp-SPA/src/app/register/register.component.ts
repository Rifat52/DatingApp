import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authservice: AuthService) { }

  ngOnInit() {
  }
  
  register() {
      this.authservice.register(this.model).subscribe(() => {
      console.log('registration successful');
    }, error => {
      console.log(error);
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }
}
