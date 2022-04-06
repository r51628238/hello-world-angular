import { Component, OnInit } from '@angular/core';
import { RecordsService } from "../records.service";

@Component({
  selector: 'app-imp-info',
  templateUrl: './imp-info.component.html',
  styleUrls: ['./imp-info.component.css'],
  providers: [RecordsService],
})
export class ImpInfoComponent implements OnInit {

  inforeceived1: string[]=[];
  inforeceived2: string[]=[];
  inforeceived3: string[]=[];
  getInfoFromServiceClass1(){
    this.inforeceived1 = this.rservice.getinfo1()
  }
  getInfoFromServiceClass2(){
    this.inforeceived2 = this.rservice.getinfo2()
  }
  getInfoFromServiceClass3(){
    this.inforeceived3 = this.rservice.getinfo3()
  }
  constructor(private rservice: RecordsService) {}

  ngOnInit(): void {
  }

}
