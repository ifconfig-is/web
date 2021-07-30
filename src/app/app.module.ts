import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IpDataComponent } from './ip-data/ip-data.component';
import { HttpClientModule } from '@angular/common/http';
import { IpBoxComponent } from './ip-box/ip-box.component';
import { ApiUsageComponent } from './api-usage/api-usage.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { GithubIconComponent } from './header/github-icon/github-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IpDataComponent,
    IpBoxComponent,
    ApiUsageComponent,
    SearchBoxComponent,
    GithubIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    ); // Or whatever path you placed mdi.svg at
  }
}
