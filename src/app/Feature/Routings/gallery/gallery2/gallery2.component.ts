import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { GalleryServiceService } from '../_Services/gallery-service.service';

import GallaryPicture from '../../../../../assets/DB_Gallery_Pictures.json';
import GallaryVideo from '../../../../../assets/DB_Gallery_Videos.json';

import { I_Picture } from '../_Model/galleryModel';

@Component({
  selector: 'app-gallery2',
  templateUrl: './gallery2.component.html',
  styleUrls: ['./gallery2.component.css'],
})
export class Gallery2Component implements OnInit {
  title: string = `Bootstrap Carousel`;
  setStateVideo: boolean = false;
  setStatePicture: boolean = true;
  dataSetV: SafeResourceUrl[] = [];
  dataSetP: I_Picture[] = [];
  videos: any[] = [];

  constructor(
    private galleryServiceService: GalleryServiceService,
    private sanitizer: DomSanitizer
  ) {
    this.galleryServiceService.dataMessage$.subscribe(
      (option: 'Pictures' | 'Videos') => {
        // console.log(option);
        if (option === 'Pictures') {
          this.setStatePicture = true;
          this.setStateVideo = false;
          this.dataSetP = GallaryPicture;
          // console.log(this.dataSetP);
        } else {
          this.setStateVideo = true;
          this.setStatePicture = false;
          GallaryVideo.forEach((a: any) => {
            // console.log(a.url);
            this.videos.push(a.url);
            // console.log(this.videos);
          });

          this.newFunc(this.videos);
          // console.log(this.dataSetV);
        }
      }
    );
  }

  ngOnInit(): void {}

  newFunc(a: any[]) {
    this.dataSetV = a.map((video: any) =>
      this.sanitizer.bypassSecurityTrustResourceUrl(video)
    );
  }
}
