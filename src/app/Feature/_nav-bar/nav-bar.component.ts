import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { UsersComponent } from '../_users/users.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  title: string = 'The Pink Panther';
  faPaw = faPaw;

  constructor(public userModal: MatDialog) {}

  ngOnInit(): void {}

  openUserModal() {
    this.userModal.open(UsersComponent);
  }
}
