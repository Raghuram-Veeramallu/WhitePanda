import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
//import { Ng2ImgMaxService } from 'ng2-img-max';
//declare function require(path: string):any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  @ViewChild('sidenav', {static: true}) sidenav: ElementRef;

  years = ['1999', '2000','2001', '2002', '2005', '2010', '2017', '2019'];
  clicked: boolean;
  resizedImage: Blob;

  // TODO: Need to fix the click effect of years

  constructor(
    //private ng2ImgMax: Ng2ImgMaxService
  ) {
    this.clicked = this.clicked === undefined ? false : true;
    //this.insertImage();
  }
  
  ngOnInit() {
  }

  setClicked(val: boolean): void {
    this.clicked = val;
  }

  // insertImage() {
  //   let image = require('../../../../assets/img/male_avatar.png');
  
  //   this.ng2ImgMax.resizeImage(image, 400, 300).subscribe(
  //     result => {
  //       this.resizedImage = result;
  //     },
  //     error => {
  //       console.log('Oh no!', error);
  //     }
  //   );
  // }

}
