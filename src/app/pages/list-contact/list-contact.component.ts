import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss'],
})
export class ListContactComponent implements OnInit {
  users: any[] = this.usersService.getUsers();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
