import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ngx-gallery-bullets',
  templateUrl: './ngx-gallery-bullets.component.html',
  styleUrls: ['./ngx-gallery-bullets.component.scss']
})
export class NgxGalleryBulletsComponent {
  @Input() count: number;
  @Input() active: number = 0;

  @Output() onChange = new EventEmitter();

  getBullets(): number[] {
      return Array(this.count);
  }

  handleChange(event: Event, index: number): void {
      this.onChange.emit(index);
  }
}
