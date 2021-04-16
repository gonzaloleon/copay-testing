/// <reference types="cordova-plugin-inappbrowser" />

import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TouchIdProvider } from '../../providers/TouchIdProvider';

declare var cordova: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  ref:InAppBrowser;
  
  constructor(platform: Platform,public navCtrl: NavController, private touchIdProv: TouchIdProvider) {
    platform.ready().then(() => {
      
    // console.log('>>> cordova ', cordova)

    // const ref: InAppBrowser = cordova.InAppBrowser.open(
    //   'https://www.google.com',
    //   '_blank',
    //   'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,hidden=yes,clearcache=yes,hidespinner=yes,disallowoverscroll=yes,zoom=no,transitionstyle=crossdissolve'
    // );
    // ref.addEventListener('loadstop', () => console.log('veme el lune'));
    // ref.addEventListener('loaderror', err => {
    //   console.log(
    //     `InAppBrowserProvider -> ${JSON.stringify(err)} load error`
    //   );
    // });
    // this.IABComponent = ref;
    this.createIABInstance('abc','https://www.google.com').then( () => { console.log('IAB instantiated')});
    });
  }

  createIABInstance(
    refName: string,
    url: string,
    initScript?: string
  ): Promise<InAppBrowser> {
    return new Promise((res, rej) => {
      const ref: InAppBrowser = cordova.InAppBrowser.open(
        url, 
        '_blank', 
        'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,hidden=yes,clearcache=yes,hidespinner=yes,disallowoverscroll=yes,zoom=no,transitionstyle=crossdissolve'
      );

      
      const initCb = () => {
        if (initScript) {
          // script that executes inside of inappbrowser when loaded
          ref.executeScript(
            {
              code: initScript
            },
            () => {
              ref.removeEventListener('loadstop', initCb);
              console.log(
                `InAppBrowserProvider -> ${refName} executed init script`
              );
            }
          );
        }
      };
      ref.addEventListener('loadstop', initCb);
      ref.addEventListener('loaderror', err => {
        console.log(
          `InAppBrowserProvider -> ${refName} ${JSON.stringify(err)} load error`
        );
        rej();
      });

      // providing two ways to get ref - caching it here and also returning it
      this.ref = ref;

      res(ref);
    });
  }

  public openInApp(){
    this.ref.show();
    setTimeout(() => {
      console.log('>>> hiding');
      this.ref.hide();
    }, 5000);
  }

  public lockApp(){
    this.touchIdProv.isAvailable().then( () => { 
      this.touchIdProv.check(); 
    });
  }

}
