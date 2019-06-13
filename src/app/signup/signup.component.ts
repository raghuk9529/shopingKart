import { Component, OnInit, Inject } from '@angular/core';
import {FormGroup, Validators, FormControl } from '@angular/forms';

import { RegisterService } from '../register.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    constructor(@Inject(RegisterService) public reg) { }

    ngOnInit() {
        this.registerForm = new FormGroup({
            userName: new FormControl("",[Validators.required]),
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        var obj=(this.registerForm.value)
        
        this.reg.register(obj).subscribe(dt=>{
            alert(dt._body)
        });

    }

    

    
}