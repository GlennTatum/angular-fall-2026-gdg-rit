import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  selector: 'app-demo-template',
  styleUrl: './demo-template.css',
  templateUrl: './demo-template.html',
})
export class DemoTemplate {
  imgName = "rit"
  imgURL = "https://www.rit.edu/brandportal/sites/rit.edu.brandportal/files/2020-04/RIT_RGB_hor.png"
}
