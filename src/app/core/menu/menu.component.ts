import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  public total: number | undefined = this.usersService.totalUsers();
  @Output() namePage: EventEmitter<string> = new EventEmitter();

  constructor(public usersService: UsersService) {}

  ngOnInit(): void {
    setInterval(() => {this.total = this.usersService.getUsers().length})
    //this.namePage.emit('ADD_CONTACT');
  }

  // public openPage(namePage: string) {
  //   this.namePage.emit(namePage);
  // }
}
