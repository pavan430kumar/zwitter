import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  lat: number = 41.658627;
  lng: number = -72.6453886;
  
  feedBackForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.feedBackForm = this.fb.group({
      feedback: ['', Validators.required],
    });
  }

  submitFeedback() {
    console.log(this.feedBackForm.value);
    console.log(this.feedBackForm.status);
    this.feedBackForm.reset();
  }
}
