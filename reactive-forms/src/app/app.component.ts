import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from './customer';

function ratingRange(c: AbstractControl): { [key: string]: boolean } | null {
  if (c.value !== null && (isNaN(c.value) || c.value < 1 || c.value > 5)) {
    return { 'range': true };
  }

  return null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  customerForm: FormGroup;
  customer: Customer;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      address: '',
      phone: '',
      notification: 'email',
      rating: [null, ratingRange]
    });
  }

  createTestData(): void {
    this.customerForm.setValue({
      name: 'Edwin',
      email: 'edwin@mail.com',
      address: 'Straat 1',
      phone: '',
      notification: 'email',
      rating: ''
    });
  }

  /**
   * Update the phone validators based on what is selected
   * @param notifyVia can be text or email
   */
  setNoticiation(notifyVia: string):void {
    const phoneControl = this.customerForm.get('phone');

    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }

}
