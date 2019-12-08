import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	
	username = new FormControl('', [Validators.required]);
	password = new FormControl('', [Validators.required]);
	
	loginform: FormGroup = this.builder.group({
		username:this.username,
		password:this.password
	});

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }
  
  LoginSubmit()
  {
	  
  }

}
