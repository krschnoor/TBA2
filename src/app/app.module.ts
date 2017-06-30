import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClassTBComponent } from './class-tb/class-tb.component';
 import {ClientService }    from './client.service';
import { TBClassifiedPipe } from './pipes/tbclassified.pipe';
import { TBClassifiedBalance } from './pipes/tbclassified.pipe';
import { TBClassifiedEntry } from './pipes/tbclassified.pipe';
import { routing} from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { AjeComponent } from './aje/aje.component';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { GlobalService } from './global.service';
import { ClientSelectComponent } from './client-select/client-select.component';
import { AccountTotalComponent } from './account-total/account-total.component';






@NgModule({
  declarations: [
    AppComponent,
    ClassTBComponent,
    TBClassifiedPipe,
    TBClassifiedBalance,
    TBClassifiedEntry,
     HomeComponent,
     AjeComponent,
     ClientlistComponent,
     ClientSelectComponent,
     AccountTotalComponent,
            
  ],
  imports: [
    BrowserModule, 
    FormsModule,
     HttpModule,
     routing,
       ],
  providers: [ClientService,GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { 



}
