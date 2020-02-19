import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-gallery-action',
  templateUrl: './ngx-gallery-action.component.html',
  styleUrls: ['./ngx-gallery-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxGalleryActionComponent {
  @Input() icon: string;
  @Input() disabled = false;
  @Input() titleText = '';

  @Output() onClick: EventEmitter<Event> = new EventEmitter();

  handleClick(event: Event) {
      if (!this.disabled) {
          this.onClick.emit(event);
      }

      event.stopPropagation();
      event.preventDefault();
  }
}
