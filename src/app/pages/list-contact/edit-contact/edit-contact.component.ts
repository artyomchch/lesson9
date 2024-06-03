import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  public form: FormGroup;
  private userId: number;
  private nameControl: FormControl

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private fb: FormBuilder
  ) 
  { }

  ngOnInit(): void {
    this.initUserId();
    this.initForm();
 

    this.route.params.subscribe( ({id}) => console.log(this.usersService.getUser(+id)) )
    console.log(this._clientAge?.value)
  }

  
  

  initUserId(){
    this.route.params.subscribe(({id}) => this.userId = +id)
  }

  initForm(){
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.minLength(4)]],
      website: ['', [Validators.required, Validators.minLength(4)]]
    });
    
    this.form.patchValue(this.usersService.getUser(this.userId))
  }

  get _client() {
    return this.form.get('username');
}

get _clientAge() {
    return this.form.get('phone');
}


  updateUser(){
    this.usersService.updateUser(this.userId, this.form.value)
    this.router.navigate(['list-contact'])
  }



}
