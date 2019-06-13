import { Component, OnInit,Inject} from '@angular/core';
import {FormGroup, Validators, FormControl } from '@angular/forms';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { MethodCall } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  Msg;



constructor(@Inject(RegisterService) public log,@Inject(Router) public _router) { }

  ngOnInit() {
      this.loginForm = new FormGroup({
          
          email: new FormControl('', [Validators.required]),
          password: new FormControl('', [Validators.required])
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      var obj=(this.loginForm.value)
      
      this.log.login(obj).subscribe(
        dt=>{
          console.log(dt);
          this.Msg="Login Success";
          $(".form-control").val("");
          $("#myModal").hide();
    
           this._router.navigate(['/electronics'])
        },
        err=>{
          this.Msg="UserName or Passwrod is wrong";
        }
         
      
      
      )
      
    

    }
}
