import { Component, Input, OnInit } from '@angular/core';
import { Quoter } from '../quoter';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Input()
  quote!: Quoter;
  constructor() { }

  ngOnInit(): void {
  }

}
