import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SpeechRecognition, SpeechRecognitionListeningOptionsIOS } from '@ionic-native/speech-recognition';
import { NgZone } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  iosOptions: SpeechRecognitionListeningOptionsIOS;
  isListening: boolean = false;
  speechList: Array<string> = [];


  constructor(private platform: Platform, public navCtrl: NavController, private speech: SpeechRecognition) {

  }

  toggleListenMode(): void {
    this.isListening = this.isListening ? false : true;
    console.log('listening mode is now: ' + this.isListening);
  }

  stopListening(): void {
    this.speech.stopListening();

  }

  async isSpeechSupported(): Promise<boolean> {
    //this.speech.isRecognitionSupproted
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }

  async getPermission(): Promise<void> {
    try {
      const permission = await this.speech.requestPermission();
      console.log(permission);
      return permission;
    }
    catch (e) {
      console.error(e);
    }
  }

  async hasPermission(): Promise<boolean> {
    try {
      const permission = await this.speech.hasPermission();
      console.log(permission);
      return permission;
    }
    catch (e) {
      console.log(e);
    }
  }

  async getSupportedLanguages(): Promise<Array<string>> {
    try {
      const languages = await this.speech.getSupportedLanguages();
      console.log(languages);
      return languages;
    }
    catch (e) {
      console.error(e);
    }
  }

  listenForSpeech(): void {
    console.log('listen action triggered');

    if (this.isListening) {
      this.speech.stopListening();
      this.toggleListenMode();
      return;
    }

    this.toggleListenMode();
    let _this = this;

    this.iosOptions = {
      language: 'ko-KR',
      //showPartial: true
    }
    if (this.platform.is('ios')) {
      this.speech.startListening().subscribe(data=>this.speechList = data, error => console.log(error));
      //this.speech.startListening(this.iosOptions).subscribe(data => this.speechList = data, error => console.log(error), );
      //console.log(this.speechList);

      /*
      subscribe(): Subscription;
      subscribe(observer: PartialObserver<T>): Subscription;
      subscribe(next?: (value: T) => void, error?: (error: any) => void, complete?: () => void): Subscription;
      */

    }
  }
}

  





  /*
  speechR() {

    this.speech.requestPermission()
      .then(
      () => console.log('Granted'),
      () => console.log('Denied')
      )

    this.speech.isRecognitionAvailable()
      .then((available: boolean) => console.log(available))


  }

  startL() {
     let options = {
      language: String,
      matches: Number,
      showPartial: Boolean // iOS only
    }

    this.speech.startListening()
      .subscribe(
      (matches: Array<string>) => console.log(matches),
      (onerror) => console.log('error:', onerror)
      )

  }

  stopR() {
    this.speech.stopListening()
  }
  */

