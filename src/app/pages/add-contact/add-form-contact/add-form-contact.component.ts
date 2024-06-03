import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-form-contact',
  templateUrl: './add-form-contact.component.html',
  styleUrls: ['./add-form-contact.component.scss']
})
export class AddFormContactComponent implements OnInit {

  public form: FormGroup 

  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.form = this.fb.group( {
      username: '',
      phone: '',
      email: '',
      website: ''
    });
    // this.form.get('email')?.valueChanges.subscribe( v => console.log(v))
  }

  addContact() {
    this.userService.addUser(this.form.value)
    this.router.navigate(['list-contact'])
  }

}
