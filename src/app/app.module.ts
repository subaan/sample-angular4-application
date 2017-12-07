import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { HeroParentComponent } from './hero-parent.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewDirectiveDirective } from './my-new-directive.directive';
import { HighlightComponent } from './highlight/highlight.component';
import { HighlightButtonComponent } from './highlight/highlight-button.component';
import {heroSwitchComponents} from './structural-directive/hero-switch.component';
import {StructuralComponent} from './structural-directive/structural.component';
import { UnlessDirective }    from './structural-directive/unless.directive';
import { HighlightDirective } from './highlight/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HeroParentComponent,
    MyNewComponentComponent,
    HighlightComponent,
    HighlightButtonComponent,
    HighlightDirective,
    heroSwitchComponents,
    StructuralComponent,
    MyNewDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
