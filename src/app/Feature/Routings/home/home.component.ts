import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { faFacebookF, faYoutube, faWikipediaW, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // @ViewChild ("my_audio") my_audio1: ElementRef;
  faFacebookF  = faFacebookF
  faYoutube = faYoutube
  faWikipediaW = faWikipediaW
  faTwitter = faTwitter
  faVolumeUp = faVolumeUp
  
  constructor() { 
    // (<HTMLInputElement>document.getElementById("my_audio")).removeAttribute("autoplay")
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // this.my_audio1.nativeElement.focus()
  }
  togglePlay() {
    console.log('test 2')
    // if (audioElement.paused) {
    //     audioElement.play();
    // }
    // else {
    //     audioElement.pause();
    // }
};

}
