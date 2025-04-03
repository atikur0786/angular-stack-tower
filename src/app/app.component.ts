import { Component } from '@angular/core';
import { StackTowerComponent } from './components/stack-tower/stack-tower.component';
import { StackItem } from './models/stack-item.model';
import { JsonPipe } from '@angular/common';
import { AlertNotificationComponent } from './components/alert-notification/alert-notification.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StackTowerComponent, AlertNotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items: StackItem[] = [];

  peekedItem!: StackItem;

  isStackEmpty: boolean = false;

  stackLength: number = 0;

  alertMessage: string = '';

  alertDescription: string = '';

  alertType: string = '';

  showAlert: boolean = false;

  // Add a new item to the stack
  push(item: StackItem): void {
    this.items.push(item);

    const alertMessage = 'Item added to the stack.';
    const alertDescription =
      'The item has been successfully added to the stack.';
    const alertType = 'success';
    this.displayAlert(alertMessage, alertDescription, alertType);
  }

  // Remove the top item from the stack
  pop(): void {
    this.items.pop();

    const alertMessage = 'Item removed from the stack.';
    const alertDescription =
      'The item has been successfully removed from the stack.';
    const alertType = 'success';
    this.displayAlert(alertMessage, alertDescription, alertType);
  }

  // Get the top item from the stack without removing it
  peek(): StackItem {
    this.peekedItem = this.items[this.items.length - 1];

    const alertMessage = 'Peeked item from the stack.';
    const alertDescription =
      'The item has been successfully peeked from the stack.';
    const alertType = 'info';

    return this.peekedItem;
  }

  // Check if the stack is empty
  isEmpty(): boolean {
    this.isStackEmpty = this.items.length === 0;

    const alertMessage = 'Checked if the stack is empty.';
    const alertDescription = 'The stack is empty.';
    const alertType = 'info';

    return this.isStackEmpty;
  }

  // Get the number of items in the stack
  length(): number {
    this.stackLength = this.items.length;

    const alertMessage = 'Checked the number of items in the stack.';
    const alertDescription =
      'The number of items in the stack is: ' + this.stackLength;
    const alertType = 'info';

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

  displayAlert(message: string, description: string, alertType: string): void {
    this.alertMessage = message;
    this.alertDescription = description;
    this.alertType = alertType;
    this.showAlert = true;

    setTimeout(() => {
      this.showAlert = false;
    }, 3000);
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
