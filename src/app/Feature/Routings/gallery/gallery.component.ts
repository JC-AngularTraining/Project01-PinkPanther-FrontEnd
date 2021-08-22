import { Component, OnInit } from '@angular/core';
import { faVideo, faImage } from '@fortawesome/free-solid-svg-icons';

import { GalleryServiceService } from './_Services/gallery-service.service';

import GallaryPicture from '../../../../assets/DB_Gallery_Pictures.json';
import GallaryVideo from '../../../../assets/DB_Gallery_Videos.json';
import { I_Picture } from './_Model/galleryModel';
import { I_Video } from './_Model/galleryModel';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  faVideo = faVideo;
  faImage = faImage;
  links = [
    { tabName: 'Gallery 1', path: 'gallery1' },
    { tabName: 'Gallery 2', path: 'gallery2' },
  ];
  dataSet: I_Picture[] | I_Video[] = GallaryPicture;
  imageStatus: boolean = true;
  videoStatus: boolean = false;
  dataSource: 'Pictures' | 'Videos' = 'Pictures';

  constructor(private galleryServiceService: GalleryServiceService) {}

  ngOnInit(): void {
    this.galleryServiceService.passData(GallaryPicture);
  }

  iconEvent() {
    if (this.imageStatus === true) {
      this.imageStatus = false;
      this.videoStatus = true;
      this.galleryServiceService.passData(GallaryVideo);
    } else {
      this.imageStatus = true;
      this.videoStatus = false;
      this.galleryServiceService.passData(GallaryPicture);
    }
  }
}
