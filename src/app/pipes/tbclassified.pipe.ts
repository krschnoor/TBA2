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

  transform(items: Array<any>, currtbyear: number,currtbday: number, currtbmonth: number):Array< any> {
      
      if(items==null) {
        return null}
      alert(currtbyear)
      return items.filter(item => item.tbyear ==currtbyear &&  item.tbday ==currtbday && item.tbmonth ==currtbmonth );
    
  }

}