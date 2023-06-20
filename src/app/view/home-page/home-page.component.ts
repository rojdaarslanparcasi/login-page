import { Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { IUser, IUserState } from '../../store/user/user.model';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from "../../store/app-reducer";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  private userStoreSubscription: Subscription;
  public ipAddressControl: FormControl;
  public user: IUser = {
    username: '',
    password: '',
    email: '',
    name: '',
    surname: '',
    country: '',
  };

  constructor(
    private readonly store: Store<AppState>,
  ) {
    this.ipAddressControl = new FormControl('', [Validators.required, Validators.pattern(this.ipAddressPattern)]);
  }

  get ipAddressPattern(): RegExp {
    // Define your regex pattern for IP address with subnet mask validation
    return /^(?:\d{1,3}\.){3}\d{1,3}(\/(?:[1-9]|[12]\d|3[0-2]))?$/;
  }

  ngOnInit(): void {
    this.userStoreSubscription = this.store.select('userStore').subscribe((state: IUserState) => {
      this.user = state.user;
    });
  }

  ngOnDestroy(): void {
    if (this.userStoreSubscription) {
      this.userStoreSubscription.unsubscribe();
    }
  }
}
