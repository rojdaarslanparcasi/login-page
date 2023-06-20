import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseOneResponseInterface, IUser } from '../../store/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  constructor(private readonly http: HttpClient) {}

  public getUser(email: any): Observable<BaseOneResponseInterface<any>> {
    const data = { email };

    // @ts-ignore
    return this.http.post('/api/send-email', data);
  }
}
