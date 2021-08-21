import { Component, OnInit } from '@angular/core';

import GallaryData from '../../../../../assets/db-gallery.json';
import { I_Gallery } from '../_Model/galleryModel';

@Component({
  selector: 'app-gallery1',
  templateUrl: './gallery1.component.html',
  styleUrls: ['./gallery1.component.css'],
})
export class Gallery1Component implements OnInit {
  title: string = `angular-responsive-carousel`;
  dataSet: I_Gallery[] = GallaryData;
  dataSet2: any = [];
  valueH = 550;
  wd = 1000;
  // cells = 5;
  ts = 1;
  cw = 200;
  dot = true;
  objf = 'cover';
  cot = true;
  br = 10;

  constructor() {
    this.dataSet.forEach((d: any) => {
      // console.log(d);
      this.dataSet2.push({ path: d.url });
      // console.log(this.dataSet2);
    });
  }

  ngOnInit(): void {}
}
