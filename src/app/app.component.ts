import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponentComponent } from './components/exercicio-1/contador-component/contador-component.component';
import { ListItemsComponent } from './components/exercicio-2-e-3/list-items/list-items.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponentComponent, ListItemsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AV2';
}
