import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  public email: string | null = null;
  constructor(private http: HttpClient) {}

  sendEmail() {
    const data = { email: this.email };

    this.http.post('/api/send-email', data).subscribe(
      response => {
        console.log('Email sent successfully');
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }
}
