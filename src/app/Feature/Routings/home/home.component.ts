import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faYoutube,
  faWikipediaW,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faFacebookF = faFacebookF;
  faYoutube = faYoutube;
  faWikipediaW = faWikipediaW;
  faTwitter = faTwitter;

  constructor() {}

  ngOnInit(): void {}
}
