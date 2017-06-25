import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClassTBComponent } from './class-tb/class-tb.component';
 import {ClientService }    from './client.service';
import { TBClassifiedPipe } from './pipes/tbclassified.pipe';
import { TBClassifiedBalance } from './pipes/tbclassified.pipe';





@NgModule({
  declarations: [
    AppComponent,
    ClassTBComponent,
    TBClassifiedPipe,
    TBClassifiedBalance
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
     HttpModule,
       ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
