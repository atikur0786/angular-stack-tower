import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-notification',
  standalone: true,
  imports: [],
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.css',
})
export class AlertNotificationComponent {
  @Input()
  message: string = '';

  @Input()
  description: string = '';

  @Input()
  alertType: string = '';

  @Output()
  closeAlertEvent = new EventEmitter<void>();

  closeAlert(): void {
    this.closeAlertEvent.emit();
  }

  alertClass() {
    switch (this.alertType) {
      case 'success':
        return 'alert-container alert-success';
      case 'error':
        return 'alert-container alert-danger';
      case 'warning':
        return 'alert-container alert-warning';
      case 'info':
        return 'alert-container alert-info';
      default:
        return 'alert-container alert-primary';
    }
  }
}
