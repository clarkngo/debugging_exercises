import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeListComponent } from './home-list/home-list.component';
import { DistancePipe } from './distance.pipe';
import { FrameworkComponent } from './framework/framework.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HtmlLineBreaksPipe } from './html-line-breaks.pipe';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';

// adds metadata to the class (in this case, AppModule)
@NgModule({
  // declare components in NgModule before you can use them in your templates.
  // "ng generate" command automatically adds components in declaration list.
  declarations: [
    HomeListComponent,
    DistancePipe,
    FrameworkComponent,
    AboutComponent,
    HomepageComponent,
    PageHeaderComponent,
    SidebarComponent,
    HtmlLineBreaksPipe,
    RatingStarsComponent
  ],
  // describes the dependencies this module has.
  // putting modules here means you are using it in your templates or
  //   dependency injection
  imports: [
    // provides services essential to launch and run a browser app
    BrowserModule,
    // service module that allows us to perform HTTP requests
    //   and manipulates those requests and their responses
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomepageComponent
      },
      {
        path: 'about',
        component: AboutComponent
      }
    ])
  ],
  // used for dependency injection and makes a service available
  //   to be injected throughout our application.
  providers: [],
  // modules used to bootstrapping and app
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
