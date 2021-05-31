import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  toggledValue = true;
  @Output() toggleChange = new EventEmitter<boolean>();

  toggled() {
    this.toggledValue = this.toggledValue ? !this.toggledValue : true;
    this.toggleChange.emit(this.toggledValue);
  }
}
