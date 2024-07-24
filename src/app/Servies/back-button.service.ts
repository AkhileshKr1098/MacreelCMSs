import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root'
})
export class BackButtonService {

  private previousUrl: string = "";
  private currentUrl: string = "";

  constructor(
    private router: Router,
    private platform: Platform,
    private _router: Router
  ) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

  back(url: any) {         
    
    this.platform.ready().then(() => {
      App.addListener('backButton', () => { 
        // for home page back 
        let urlObject = new URL(window.location.href);
        let pathname = urlObject.pathname;
        let trimmedPathname = pathname.startsWith('/') ? pathname.substr(1) : pathname;
        if (trimmedPathname == "admin" || trimmedPathname == "employee" || trimmedPathname == '') {
          this.showExitConfirmation();
        } else {
          window.location.replace(this.previousUrl);
          window.location.href = this.previousUrl;
        }

      })
    })
  }




  showExitConfirmation() {
    const confirmed = window.confirm('Do you want to close the app?');
    if (confirmed) {
      // User confirmed, exit the app
      App.exitApp();
    }
  }


}
