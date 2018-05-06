import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'napip'
})
export class NapipPipe implements PipeTransform {

  transform(value: string): string {
    let newString :string ="";
    var num = "^[0-9]+$";
    if(value.match(num)){
      return value;
    }
    else{
      return "NA";
    }
  }

}
