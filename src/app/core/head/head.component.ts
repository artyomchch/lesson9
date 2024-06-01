import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent implements OnInit {
  public total: number | undefined = this.usersService.totalUsers();

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {}
}
