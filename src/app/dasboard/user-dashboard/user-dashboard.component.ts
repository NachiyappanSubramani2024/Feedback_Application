import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgIf,
    NgFor
  ]
})
export class UserDashboardComponent {
  feedbackForm: FormGroup;
  stars = [1, 2, 3, 4, 5];

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      rating: [0, Validators.required],
      review: ['']
    });
  }

  setRating(value: number): void {
    this.feedbackForm.get('rating')?.setValue(value);
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
      alert('Thank you for your feedback!');
      this.feedbackForm.reset({ rating: 0 });
    }
  }
}
