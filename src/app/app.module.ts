import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { ImpInfoComponent } from './imp-info/imp-info.component';
import { FormComponentComponent } from './form-component/form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    TextcomponentComponent,
    ImagecomponentComponent,
    ImpInfoComponent,
    FormComponentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
