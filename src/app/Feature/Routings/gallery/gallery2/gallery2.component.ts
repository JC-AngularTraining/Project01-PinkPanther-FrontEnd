import { Component, OnInit } from '@angular/core';

import GallaryData from '../../../../../assets/DB-Gallery_Pictures.json';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css'],
})
export class Gallery2Component implements OnInit {
  title: string = `Bootstrap Carousel`;
  constructor() {}

  ngOnInit(): void {}
}
