import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, MaterialModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
