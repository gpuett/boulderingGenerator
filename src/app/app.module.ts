import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './api-keys';
import { AppComponent } from './app.component';
import { GridComponent } from './grid/grid.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProblemListComponent } from './problem-list/problem-list.component';
import { HelpComponent } from './help/help.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { GridDetailsComponent } from './grid-details/grid-details.component';
import { AdminComponent } from './admin/admin.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    WelcomeComponent,
    ProblemListComponent,
    HelpComponent,
    UserInfoComponent,
    GridDetailsComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
