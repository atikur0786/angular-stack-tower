import { Component } from '@angular/core';
import { StackTowerComponent } from './components/stack-tower/stack-tower.component';
import { StackItem } from './models/stack-item.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StackTowerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: StackItem[] = [];

  // Add a new item to the stack
  push(item: StackItem): void {
    this.items.push(item);
  }

  // Remove the top item from the stack
  pop(): void {
    this.items.pop();
  }

  // Get the top item from the stack without removing it
  peek(): StackItem[] {
    return this.items;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    return this.items.length === 0;
  }

  // Get the number of items in the stack
  length(): number {
    return this.items.length;
  }

  // Clear all items from the stack
  clear(): void {
    this.items = [];
  }
}
