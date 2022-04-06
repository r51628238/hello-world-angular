import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1:string[] = ["shagun",'1234','sha@abc.net'];
  info2:string[] = ["shivi",'12345','shi@abc.net'];
  info3:string[] = ["karuna",'123456','kar@abc.net'];

  getinfo1():string[]{
  return this.info1
  }
  getinfo2(): string[]{
    return this.info2
  }
  getinfo3(): string[]{
    return this.info3
  }

  constructor() { }
}
