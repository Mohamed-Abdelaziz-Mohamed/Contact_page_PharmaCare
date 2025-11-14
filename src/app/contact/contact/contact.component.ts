import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false; // To track whether the form has been submitted

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  // Helper getter for easier access to form controls in the HTML
  get f() {
    return this.contactForm.controls;
  }

  // Initialize the form with validation rules
  private initForm() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  submit() {
    this.submitted = true; // Mark that the form has been submitted

    // Stop here if the form is invalid
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched(); // Show validation errors
      return;
    }

    // If the form is valid
    console.log('Form Submitted!', this.contactForm.value);
    
    // You can send the form data to a server here
    // ...

    alert('Message sent (check console)!');
    this.contactForm.reset();
    this.submitted = false; // Reset submission state
  }
}
