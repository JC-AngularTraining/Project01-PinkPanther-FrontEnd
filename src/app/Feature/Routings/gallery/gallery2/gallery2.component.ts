import { Component, OnInit } from '@angular/core';
import { GalleryServiceService } from '../_Services/gallery-service.service';

import GallaryData from '../../../../../assets/DB_Gallery_Pictures.json';

import { I_Picture } from '../_Model/galleryModel';
import { I_Video } from '../_Model/galleryModel';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css'],
})
export class Gallery2Component implements OnInit {
  title: string = `Bootstrap Carousel`;
  dataSet: any = [];

  constructor(private galleryServiceService: GalleryServiceService) {
    this.galleryServiceService.dataMessage$.subscribe(
      (serviceData: I_Picture[] | I_Video[]) => {
        // console.log(serviceData);
        this.dataSet = serviceData;
      }
    );
  }

  ngOnInit(): void {}
}
