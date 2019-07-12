import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public lat: number = -25.58973;
  public lng: number = 32.351748;
  public zoom: number = 12;

  constructor() { }

  ngOnInit() { }

  subscribe(){ }

}