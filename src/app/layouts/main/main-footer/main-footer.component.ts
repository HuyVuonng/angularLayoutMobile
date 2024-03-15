import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './main-footer.component.html',
  styleUrl: './main-footer.component.scss',
})
export class MainFooterComponent {}
