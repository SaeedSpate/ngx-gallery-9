import { NgModule } from '@angular/core';
import { NgxGalleryComponent } from './ngx-gallery.component';
import { NgxGalleryPreviewComponent } from './ngx-gallery-preview/ngx-gallery-preview.component';
import { NgxGalleryImageComponent } from './ngx-gallery-image/ngx-gallery-image.component';
import { NgxGalleryThumbnailsComponent } from './ngx-gallery-thumbnails/ngx-gallery-thumbnails.component';
import { NgxGalleryActionComponent } from './ngx-gallery-action/ngx-gallery-action.component';
import { NgxGalleryArrowsComponent } from './ngx-gallery-arrows/ngx-gallery-arrows.component';
import { NgxGalleryBulletsComponent } from './ngx-gallery-bullets/ngx-gallery-bullets.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    NgxGalleryComponent,
    NgxGalleryPreviewComponent, 
    NgxGalleryImageComponent,
    NgxGalleryThumbnailsComponent,
    NgxGalleryActionComponent,
    NgxGalleryArrowsComponent,
    NgxGalleryBulletsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NgxGalleryComponent]
})
export class NgxGalleryModule { }
