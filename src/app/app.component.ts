import { Component, Input } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { TextToSpeech } from '@ionic-native/text-to-speech';

import { HomePage } from '../pages/home/home';
import { WebApiPage } from '../pages/web-api/web-api';
import { HerolistPage } from '../pages/herolist/herolist';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HerolistPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, tts:TextToSpeech) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }
}

