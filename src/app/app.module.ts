import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {CalendarModule} from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,

    PostCreateComponent,
    PostListComponent,
    HeaderComponent
  ],
  imports: [
    AccordionModule,  CalendarModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
