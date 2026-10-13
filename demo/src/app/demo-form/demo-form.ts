import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-demo-form',
  styleUrl: './demo-form.css',
  templateUrl: './demo-form.html',
})
export class DemoForm {

  userForm = new FormGroup({
    name: new FormControl<string>(''),
    age: new FormControl<number>(0)
  })

  profileName: string
  profileAge: string
  isSubmitted: boolean

  constructor() {
    this.profileName = ''
    this.profileAge = ''
    this.isSubmitted = false
  }

  onSubmit() {
    this.isSubmitted = true
    this.profileName = this.userForm.value.name ? this.userForm.value.name : ''
    this.profileAge = this.userForm.value.age ? this.userForm.value.age.toString() : ''
  }
}
