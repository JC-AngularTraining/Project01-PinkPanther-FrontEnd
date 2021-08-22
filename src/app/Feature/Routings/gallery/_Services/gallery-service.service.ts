import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { I_Picture } from '../_Model/galleryModel';
import { I_Video } from '../_Model/galleryModel';

@Injectable({
  providedIn: 'root',
})
export class GalleryServiceService {
  private dataMessageSource = new Subject<I_Picture[] | I_Video[]>();
  dataMessage$ = this.dataMessageSource.asObservable();

  constructor() {}

  passData(dataSet: I_Picture[] | I_Video[]) {
    this.dataMessageSource.next(dataSet);
  }
}
