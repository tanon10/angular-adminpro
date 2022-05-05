import { Component } from '@angular/core';

@Component({
  selector: 'app-increments',
  templateUrl: './increments.component.html',
  styles: [
  ]
})
export class IncrementsComponent {

  progressc: number=50;

  get getPercentage(){
    return `${this.progressc}%`;
  }
  
  changeVal(val:number){

    if( this.progressc >=100 && val>=0){
      return this.progressc =100;
    }

    if(this.progressc <=0 && val<0){
      return this.progressc =0;
    }

    return this.progressc = this.progressc + val;
  }
}
