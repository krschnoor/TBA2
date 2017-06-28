import { Component } from '@angular/core';
import { ClassTBComponent } from './class-tb/class-tb.component';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {

  constructor(private gs: GlobalService){
    gs.gv = null
  }
  title = 'app';
}
