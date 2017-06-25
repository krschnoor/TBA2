import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tBClassified'
})
export class TBClassifiedPipe implements PipeTransform {

  transform(items: Array<any>, acctclass: string):Array< any> {
      
      if(items==null) {
        return null}
      
      return items.filter(item => item.class ==acctclass);
    
  }

}


@Pipe({
  name: 'tBClassifiedBalance'
})
export class TBClassifiedBalance implements PipeTransform {

  transform(items: Array<any>, fymonth: string):Array< any> {
      
      if(items==null) {
        return null}
      
      return items.filter(item => item.tbyear ==fymonth);
    
  }

}