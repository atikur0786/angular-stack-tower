import { Component } from '@angular/core';
import { StackTowerComponent } from './components/stack-tower/stack-tower.component';
import { StackItem } from './models/stack-item.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StackTowerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: StackItem[] = [];

  peekedItem!: StackItem;

  isStackEmpty: boolean = false;

  stackLength: number = 0;

  // Add a new item to the stack
  push(item: StackItem): void {
    this.items.push(item);
  }

  // Remove the top item from the stack
  pop(): void {
    this.items.pop();
  }

  // Get the top item from the stack without removing it
  peek(): StackItem {
    this.peekedItem = this.items[this.items.length - 1];

    return this.peekedItem;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    this.isStackEmpty = this.items.length === 0;
    return this.isStackEmpty;
  }

  // Get the number of items in the stack
  length(): number {
    this.stackLength = this.items.length;
    return this.stackLength;
  }

  // Clear all items from the stack
  clear(): void {
    this.items = [];
  }

  addItemToStack(): void {
    const newItem: StackItem = {
      id: this.items.length + 1,
      name: `Item ${this.items.length + 1}`,
      description: `Description for Item ${this.items.length + 1}`,
    };
    this.push(newItem);
  }
}
