import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environment';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './core/api/auth.service';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzMessageModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzDropDownModule,
    NzToolTipModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
})
export class AppComponent implements OnInit {
  title = 'project-test-final';
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.login();
  }
  login() {
    const body = {
      username: 'admin',
      password: 'admin',
      rememberMe: true,
    };
    this.auth.login(body).subscribe((data) => {
      localStorage.removeItem('access_token');
      localStorage.setItem('access_token', data['id_token']);
    });
  }
}
