import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../_services/login.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  confirm_password: AbstractControl;
  favorite_genres: AbstractControl;
  activeField = false;
  activeFieldPw = false;
  constructor(
    private router: Router,
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/)
      ]),
      'confirm_password': new FormControl('', [
        Validators.required,
      ]),
    })

    this.username = this.form.get('username');
    this.password = this.form.get('password');
    this.confirm_password = this.form.get('confirm_password');
    
    this.password.valueChanges.subscribe((val)=>{
      this.confirmPassword();
    })

    this.confirm_password.valueChanges.subscribe((val)=>{
      this.confirmPassword();
    })
  }

  confirmPassword(){
    if (this.confirm_password.value !== this.password.value) this.confirm_password.setErrors({notMatch:true})
    else this.confirm_password.setErrors(null)
  }

  onSubmit() {
    const data = {
      username: this.username.value,
      password: this.password.value,
    }
    this.loginService.register(data)
      .subscribe(_ => {
        this.router.navigateByUrl('/auth/signin')
      });

  }

  setActive(type: string, status: boolean) {
    (type === 'login') ? this.activeField = status : this.activeFieldPw = status;
  }
}
