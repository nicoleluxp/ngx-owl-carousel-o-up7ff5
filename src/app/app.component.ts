import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";

import { OwlOptions, SlidesOutputData } from "ngx-owl-carousel-o";

export class CarouselData {
  id?: string;
  text: string;
  dataMerge?: number;
  width?: number;
  dotContent?: string;
  src?: string;
  dataHash?: string;
}

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  carouselData: CarouselData[] = [
    {
      text: "Slide 1",
      src: "assets/images/350x450&text=1.png",
      dataMerge: 2,
      width: 300,
      dotContent: "text1",
      dataHash: "one"
    },
    {
      text: "Slide 2",
      src: "assets/images/350x650&text=2.png",
      dataMerge: 1,
      width: 500,
      dotContent: "text2",
      dataHash: "two"
    },
    {
      text: "Slide 3",
      src: "assets/images/350x250&text=3-fallback.png",
      dataMerge: 3,
      dotContent: "text3",
      dataHash: "three"
    },
    {
      text: "Slide 4",
      src: "assets/images/350x250&text=4.png",
      width: 450,
      dotContent: "text4",
      dataHash: "four"
    },
    {
      text: "Slide 5",
      src: "assets/images/350x250&text=5.png",
      dataMerge: 2,
      dotContent: "text5",
      dataHash: "five"
    }
    // { text: 'Slide 6', dotContent: 'text5'},
    // { text: 'Slide 7', dotContent: 'text5'},
    // { text: 'Slide 8', dotContent: 'text5'},
    // { text: 'Slide 9', dotContent: 'text5'},
    // { text: 'Slide 10', dotContent: 'text5'},
  ];
  customOptions: OwlOptions = {
    loop: true,
    // autoplay: true,
    // center: true,
    // dots: false,
    // autoHeight: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false,
        margin: 20
      },
      576: {
        items: 2,
        nav: false,
        dots: true,
        margin: 40
      },
      768: {
        items: 2,
        nav: true,
        margin: 70
      }
    }
  };

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {}

  getData(data: SlidesOutputData) {
    console.log(data);
  }
}
