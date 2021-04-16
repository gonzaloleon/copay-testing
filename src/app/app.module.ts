import { APP_INITIALIZER, NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AppInitService } from '../providers/app-init.service';
import { TouchIdProvider } from '../providers/TouchIdProvider';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio';
// import { SecureStorageEcho } from '@ionic-native/secure-storage-echo/ngx';
// import { StorageService } from '../providers/storage.service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    // SecureStorageEcho,
    // StorageService,
    AppInitService,
    TouchIdProvider,
    FingerprintAIO,
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitService: AppInitService) => () => appInitService.Init(),
      deps: [AppInitService],
      multi: true
    }
  ]
})
export class AppModule {}
