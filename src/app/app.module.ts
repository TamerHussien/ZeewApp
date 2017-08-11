import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActivePage } from '../pages/active/active';
import { PastPage } from '../pages/past/past';
import { DraftPage } from '../pages/draft/draft';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ActiveProvider } from '../providers/active/active';
import { DraftProvider } from '../providers/draft/draft';
import { PastProvider } from '../providers/past/past';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { baseURL } from '../shared/baseurl';
import { OrderProvider } from '../providers/order/order';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActivePage,
    PastPage,
    DraftPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
     ActivePage,
    PastPage,
    DraftPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ActiveProvider,
    DraftProvider,
    PastProvider,
    ProcessHttpmsgProvider,
    { provide: 'BaseURL', useValue: baseURL },
    OrderProvider,
    AuthServiceProvider,
    
  ]
})
export class AppModule {}
