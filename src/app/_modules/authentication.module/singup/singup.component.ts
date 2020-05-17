import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../_services/login.service';
import { GenresService } from '../../../_services/genres.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  form: FormGroup;
  username: AbstractControl;
  password: AbstractControl;
  confirm_password: AbstractControl;
  favorite_genres: AbstractControl;
  activeField = false;
  activeFieldPw = false;
  genres = []
  selectedGenres = []
  dropdownSettings: IDropdownSettings;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private genresService: GenresService
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
      'favorite_genres': new FormControl('', [
        Validators.required,
      ])
    })

    this.username = this.form.get('username');
    this.password = this.form.get('password');
    this.confirm_password = this.form.get('confirm_password');
    this.favorite_genres = this.form.get('favorite_genres')
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'name',
      limitSelection: 2,
      enableCheckAll: false,
      //selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
    };

    this.password.valueChanges.subscribe((val)=>{
      this.confirmPassword();
    })

    this.confirm_password.valueChanges.subscribe((val)=>{
      this.confirmPassword();
    })

    this.genresService.getAllGenres().subscribe(res => {
      this.genres = res;
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
      favorite_genres: this.favorite_genres.value.map(el => el.id)
    }
    this.loginService.register(data)
      .subscribe(res => {
        this.router.navigateByUrl('/main/')
      });

  }

  setActive(type: string, status: boolean) {
    (type === 'login') ? this.activeField = status : this.activeFieldPw = status;
  }

  onItemSelect(item: any) {
    
  }
  onSelectAll(items: any) {
    
  }
}
