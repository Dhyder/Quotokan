import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: any): number {
    let contemporary:Date = new Date();
    let contemporaryNull:any = new Date(contemporary.getFullYear(),contemporary.getMonth(),contemporary.getDate())
    var contemporaryDiff = Math.abs(contemporaryNull - value)
    const clockSeconds = 86400;

    var contemporaryDiffSeconds = contemporaryDiff*0.001;
    var calCounter = contemporaryDiffSeconds/clockSeconds;

    if(calCounter >= 1 && contemporaryNull > value){
      return calCounter;
    }else{
      return 0;
    }
    
  }

}
