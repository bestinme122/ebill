import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Component
import { AppComponent } from './app.component';
import { ShopListComponent } from './shop.component';

//Service
import { ShopService } from './shop.service';

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
