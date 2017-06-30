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

  transform(items: Array<any>, fye:Date):Array< any> {
      
      if(items==null) {
        return null}
      
      return items.filter(item => this.compare(item,fye) );
    
  }


compare(item,fye){

var dt1 = new Date(item.tbdate)
var dt2 = new Date(fye)

return dt1.getTime() == dt2.getTime()

}

}

@Pipe({
  name: 'tBClassifiedEntry'
})
export class TBClassifiedEntry implements PipeTransform {

  transform(items: Array<any>, acctid:string):Array< any> {
      
      if(items==null) {
        return null}
      
      return items.filter(item => item.AcctId ==acctid );
    
  }




}