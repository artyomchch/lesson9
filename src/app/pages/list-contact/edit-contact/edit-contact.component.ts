import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) 
  { }

  ngOnInit(): void {
    this.route.params.subscribe( ({id}) => console.log(this.usersService.getUser(+id)) )
  }

}
