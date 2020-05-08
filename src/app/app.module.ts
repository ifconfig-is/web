import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  DomSanitizer,
  SafeResourceUrl,
  SafeUrl
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IpDataComponent } from './ip-data/ip-data.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { GqlApiComponent } from './gql-api/gql-api.component';
import { IpBoxComponent } from './ip-box/ip-box.component';
import { SimpleApiComponent } from './simple-api/simple-api.component';
import { NoteComponent } from './note/note.component';
import { SearchBoxComponent } from './header/search-box/search-box.component';
import { GithubIconComponent } from './header/github-icon/github-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IpDataComponent,
    GqlApiComponent,
    IpBoxComponent,
    SimpleApiComponent,
    NoteComponent,
    SearchBoxComponent,
    GithubIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    GraphQLModule,
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(
      domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg')
    ); // Or whatever path you placed mdi.svg at
  }
}
