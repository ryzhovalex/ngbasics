import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  title = "Clyde Wan Damm";
  text = "I love donuts.";
  badges = "Good guy";
  textColor = 'blue';

  ngOnInit(): void {
  }

  changeTitle() {
    this.title = 'Title has been changed!'
  }
  
  inputTitleHandler(event: any) {
    this.title = event.target.value;
  }

  inputTextHandler(value: string) {
    this.text = value;
  }

  changeHandler() {
    /* Called on each change by ngModel. */
    console.log(this.badges);
  }
}
