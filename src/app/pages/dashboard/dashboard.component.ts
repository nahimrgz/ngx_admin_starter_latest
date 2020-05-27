import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';



@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  imageObject: Array<object> = [{
    image: 'assets/images/agv/img1.webp',
    thumbImage: 'assets/images/agv/img1_min.jpg',
    alt: 'alt agv k1',
  }, {
    image: 'assets/images/agv/img2.webp',
    thumbImage: 'assets/images/agv/img2_min.jpg',
    alt: 'alt agv k1',
  },
  {
    image: 'assets/images/agv/img3.webp',
    thumbImage: 'assets/images/agv/img3_min.jpg',
    alt: 'alt agv k1',
  },
  {
    image: 'assets/images/agv/img4.webp',
    thumbImage: 'assets/images/agv/img4_min.jpg',
    alt: 'alt agv k1',
  },
  {
    image: 'assets/images/agv/img5.webp',
    thumbImage: 'assets/images/agv/img5_min.jpg',
    alt: 'alt agv k1',
  },
  {
    image: 'assets/images/agv/img6.webp',
    thumbImage: 'assets/images/agv/img6_min.jpg',
    alt: 'alt agv k1',
  },
];

imgSize= {width: 372, height: 496};

  ngOnInit() {

  }

}
