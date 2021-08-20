import { Component, OnInit } from '@angular/core';

import GallaryData from '../../../../assets/Gallery-data.json';
import { I_Gallery } from './Model/galleryModel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  data: I_Gallery = GallaryData;

  constructor() {}

  ngOnInit(): void {}
}
