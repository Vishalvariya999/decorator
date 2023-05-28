import { Component, Input, OnInit } from '@angular/core';
import { Iservices } from '../common';
@Component({
  selector: 'app-ourservices',
  templateUrl: './ourservices.component.html',
  styleUrls: ['./ourservices.component.scss']
})
export class OurservicesComponent implements OnInit {

  @Input() servDataes!: Iservices[];

  constructor() { }

  ngOnInit(): void {
  }

}
