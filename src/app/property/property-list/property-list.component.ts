import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

properties:Array<any>=[
{
  "id":"1",
  "Name":"Birla House",
  "Type":"Villa",
  "Price": "120000"

},
{
  "id":"2",
  "Name":"Sunshine Residency",
  "Type":"Apartment",
  "Price": "10000"

},
{
  "id":"3",
  "Name":"Northern Shine",
  "Type":"Flats",
  "Price": "17000"

},
{
  "id":"4",
  "Name":"Tata Cross",
  "Type":"Villa",
  "Price": "188000"

},
{
  "id":"5",
  "Name":"Shehnas Resident",
  "Type":"Apartment",
  "Price": "13559"

},
{
  "id":"6",
  "Name":"Apollo Flats",
  "Type":"Flat",
  "Price": "12300"

},
]

  constructor() { }

  ngOnInit(): void {
   
  }

}
