import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "emptiness",
  pure: false
})

export class EmptinessPipe implements PipeTransform {
  transform(input: Keg[], checkEmptiness) {
    var output: Keg[] = [];
    if(checkEmptiness === "kegNotEmpty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints < 10) {
          output.push(input[i]);
          console.log(input[i].pints);
        }
      }
      return output;
    } else if (checkEmptiness === "kegEmpty") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].pints === 0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
