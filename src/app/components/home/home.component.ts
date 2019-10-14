import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  title = "guacamaya-tours";
  itemsPerSlide = 3;
  singleSlideOffset = false;
  noWrap = true;
  slidesChangeMessage = "";

  slides = [
    {
      image: "../../../assets/santo_angel.jpg"
    },
    {
      image: "../../../assets/margarita.jpg"
    },
    {
      image: "../../../assets/merida.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/4.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg"
    },
    {
      image:
        "https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg"
    }
  ];
  ngOnInit() {}

  onSlideRangeChange(indexes: number[]): void {
    this.slidesChangeMessage = `Slides have been switched: ${indexes}`;
  }
}
