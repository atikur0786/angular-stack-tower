import { Component, Input } from '@angular/core';
import { StackItem } from '../../models/stack-item.model';

@Component({
  selector: 'app-stack-tower',
  standalone: true,
  imports: [],
  templateUrl: './stack-tower.component.html',
  styleUrl: './stack-tower.component.css',
})
export class StackTowerComponent {
  @Input() items: StackItem[] = [];
}
