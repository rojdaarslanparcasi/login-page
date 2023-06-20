import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser, IUserState } from '../../store/user/user.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-reducer';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private userStoreSubscription: Subscription;
  public username: string | null = null;
  public password: string | null = null;
  public user: IUser | null = null;

  constructor(
    private readonly store: Store<AppState>,
    private readonly messageService: MessageService,
    private readonly router: Router,
  ) {
  }

  public login(): void {
    if (this.user?.username === this.username && this.user.password == this.password) {
      this.router.navigate(['/home-page']);
    } else {
      this.messageService.add({ key: 'wrongUser', severity: 'error', summary: 'Warn', detail: 'Password or username is incorrect' });
    }
  }

  ngOnInit(): void {
    this.store.select('userStore').subscribe((state: IUserState) => {
      this.user = state.user;
    });
  }

  ngOnDestroy(): void {
    if (this.userStoreSubscription) {
      this.userStoreSubscription.unsubscribe();
    }
  }
}
