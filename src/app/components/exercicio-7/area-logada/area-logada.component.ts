import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  standalone: true,
  imports: [],
  templateUrl: './area-logada.component.html',
  styleUrl: './area-logada.component.css'
})
export class AreaLogadaComponent {
  @Input() email: string = '';
}
