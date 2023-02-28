import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  public appPages = [
    { title: 'page1', url: '/page1', icon: 'mail' },
    { title: 'page2', url: '/page2', icon: 'heart' },
    { title: 'page3', url: '/page3', icon: 'archive' },
  ];
  
  constructor(
    private router: Router
  ) { }

  async ngOnInit() {
    await App.addListener('backButton', async ({ canGoBack }) => {
      console.log("canGoBack", canGoBack)
      if (!canGoBack) {
        App.exitApp();
      } else {
        window.history.back();
      }
    });
  }

  navigate(url: string){
    this.router.navigate([url]);
  }
}
