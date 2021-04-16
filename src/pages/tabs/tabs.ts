import { Component } from '@angular/core';
// import { StorageService } from '../../providers/storage.service';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {
    // storage: StorageService
    // storage.set("Test", "123").then(data => console.log(data)).catch(err=> console.log(err));
  }
}
