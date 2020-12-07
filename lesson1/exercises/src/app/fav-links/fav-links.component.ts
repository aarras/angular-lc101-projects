import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://scrimba.com/learn/adventcalendar?utm_source=newsletter&utm_medium=email&utm_campaign=javascriptmaslaunch', 'https://www.w3schools.com/cssref/pr_text_text-align.asp', 'https://www.launchcode.org/']
  constructor() { }

  ngOnInit() {
  }

}
