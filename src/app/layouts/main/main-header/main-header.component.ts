import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [NzButtonModule, RouterLink],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {}
