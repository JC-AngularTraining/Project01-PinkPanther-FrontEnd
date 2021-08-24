import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GalleryServiceService {
  private dataMessageSource = new Subject<'Pictures' | 'Videos'>();
  dataMessage$ = this.dataMessageSource.asObservable();

  constructor() {}

  sourceDataOption(option: 'Pictures' | 'Videos') {
    // console.log(option);
    this.dataMessageSource.next(option);
  }
}
