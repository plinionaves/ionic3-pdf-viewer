import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { PdfViewerModule } from 'ng2-pdf-viewer';

import { HomePage } from '../pages/home/home';
import { MyApp } from './app.component';
import { PdfViewerPage } from './../pages/pdf-viewer/pdf-viewer';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PdfViewerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PdfViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HomePage,
    MyApp,
    PdfViewerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
