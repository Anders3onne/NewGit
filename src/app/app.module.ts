import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserFormComponent } from "./userform/userform.component";
import { GithubComponent } from "./github/github.component";
import { AndyPipe } from "./andy.pipe";
import { AllDirective } from "./all.directive";

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    GithubComponent,
    AllDirective,
    AndyPipe,
    AllDirective
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
