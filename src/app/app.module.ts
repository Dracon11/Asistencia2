import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './layout/errors/not-found/not-found.component';

import { AppSettings } from './app.settings';
import { ServiceStockService } from './services/service-stock.service';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    routing,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [Http]
      }
    })
  ],
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  providers: [ AppSettings, ServiceStockService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
