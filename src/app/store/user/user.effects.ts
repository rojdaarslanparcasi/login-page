import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as  UserAction from './user.action';
import { BaseOneResponseInterface, IUser } from './user.model';
import { UserService } from '../../shared/service/user.service';


@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    public userService: UserService,
  ) {}


  checkIn = createEffect(() =>
    this.actions$.pipe(
      ofType(UserAction.SEND_PASSWORD_USER),
      switchMap((objectData: UserAction.SendPasswordUser) => {
        return this.userService.getUser(objectData).pipe(
          switchMap((response: any) => {
            return of(new UserAction.SendPasswordUserCompleted());
          }),
        );
      }),
    ),
  );
}
