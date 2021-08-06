import { Component, OnInit } from '@angular/core';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title: string = 'The Pink Panther';
  faPaw  = faPaw

  constructor() { }

  ngOnInit(): void {
  }

}
