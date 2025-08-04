import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [/* ... */],
  imports: [
    BrowserModule,
    AppRoutingModule, // <<< important
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
