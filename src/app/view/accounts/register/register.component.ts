import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app-reducer';
import { IUser } from '../../../store/user/user.model';
import * as UserActions from '../../../store/user/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  public isEmailValid: boolean = true;
  public isPasswordValid: boolean = true;
  public isUsernameValid: boolean = true;
  public user: IUser = {
    username: '',
    password: '',
    email: '',
    name: '',
    surname: '',
    country: '',
  };
  public countries = [
    {
      label: 'Germany',
      value: 'de',
    },
    {
      label: 'USA',
      value: 'us',
    },
    {
      label: 'Japan',
      value: 'jp',
    }
  ];

  constructor(
    private readonly store: Store<AppState>,
    private readonly messageService: MessageService,
    private readonly router: Router,
  ) {
  }

  public showBottomCenter(): void {
    this.checkPasswordStrength();

    if (this.isPasswordValid && this.isEmailValid && this.isUsernameValid) {
     this.messageService.add({key: 'bc', severity: 'success', summary: 'Success', detail: 'The user has been created.'});
     this.store.dispatch(new UserActions.RegisterUser(this.user));

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 500);
    }
  }

  public checkEmailValidity(): void {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isEmailValid = emailRegex.test(this.user.email);
  }

  private checkPasswordStrength(): void {
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const numberRegex = /[0-9]/;

    const isPasswordStrong =
      this.user.password.length >= minLength &&
      uppercaseRegex.test(this.user.password) &&
      lowercaseRegex.test(this.user.password) &&
      numberRegex.test(this.user.password);

    this.isPasswordValid = !isPasswordStrong;
  }


  checkUsernameValidity() {
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    this.isUsernameValid = usernameRegex.test(this.user.username);
  }
}
