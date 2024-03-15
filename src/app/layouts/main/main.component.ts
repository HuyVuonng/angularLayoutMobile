import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzLayoutModule,
    NzMenuModule,
    NzButtonModule,
    NzSelectModule,
    ReactiveFormsModule,
    NzIconModule,
    NzSkeletonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzDropDownModule,
    RouterModule,
    MainHeaderComponent,
    MainFooterComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  isCollapsed = false;
  isReverseArrow = false;
  width = 280;
}
