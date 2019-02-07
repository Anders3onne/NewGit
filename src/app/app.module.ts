mport { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { ProvisionComponent } from './provision/provision.component';
// import { AboutComponent } from './about/about.component';
import { mamiePipe } from './mamie.pipe';
import { NanaDirective } from './nana.directive';
import { AndyPipe } from './andy.pipe';
import { AllDirective } from './all.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    ProvisionComponent,
    NanaDirective,
    // AboutComponent,
    mamiePipe,
    NanaDirective,
    AndyPipe,
    AllDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }