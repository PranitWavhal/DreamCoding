import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	
	firstname = new FormControl('', [Validators.required]);
	lastname = new FormControl('', [Validators.required]);
	mobilenumber = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]);
	setusername = new FormControl('');
	setpassword = new FormControl('', [Validators.required, Validators.minLength(6)]);
	
	registrationform: FormGroup = this.builder.group({
		firstname:this.firstname,
		lastname:this.lastname,
		mobilenumber:this.mobilenumber,
		setusername:this.setusername,
		setpassword:this.setpassword
	});

  constructor(private builder: FormBuilder) { }

  ngOnInit() {
  }
  
  RegistrationSubmit()
  {
	  
  }

}
