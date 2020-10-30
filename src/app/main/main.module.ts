import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { NguCarouselModule } from '@ngu/carousel';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutes } from './main.routing';

import { DemoComponent } from './main.component';

import { WINDOW_PROVIDERS } from '../shared/helpers/window.helper';
import {HeaderComponent} from '../layouts/shared-sections/header/header.component';
import {IntroOneComponent} from '../layouts/shared-sections/intro-one/intro-one.component';
import {PortfolioComponent} from '../layouts/shared-sections/portfolio/portfolio.component';
import {ServicesComponent} from '../layouts/shared-sections/services/services.component';
import {CtaComponent} from '../layouts/shared-sections/cta/cta.component';
import {PricingsComponent} from '../layouts/shared-sections/pricings/pricings.component';
import {ContactComponent} from '../layouts/shared-sections/contact/contact.component';
import {FooterComponent} from '../layouts/shared-sections/footer/footer.component';
import {TestimonialsComponent} from '../layouts/shared-sections/testimonials/testimonials.component';
import {PortfolioCarouselComponent} from '../layouts/shared-sections/portfolio-carousel/portfolio-carousel.component';
import {TestimonialsCarouselComponent} from '../layouts/shared-sections/testimonials-carousel/testimonials-carousel.component';
import {ServicesCarouselComponent} from '../layouts/shared-sections/services-carousel/services-carousel.component';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    NguCarouselModule,
    HttpClientModule,
    RouterModule.forChild(DemoRoutes)
  ],
  declarations: [
    DemoComponent,
    HeaderComponent,
    IntroOneComponent,
    PortfolioComponent,
    ServicesComponent,
    CtaComponent,
    PricingsComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    PortfolioCarouselComponent,
    TestimonialsCarouselComponent,
    ServicesCarouselComponent
  ],
  providers: [WINDOW_PROVIDERS]

})
export class DemoModule { }
