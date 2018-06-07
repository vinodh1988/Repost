import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';



import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { LeftbodyComponent } from './leftbody/leftbody.component';
import { RightbodyComponent } from './rightbody/rightbody.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ContactformComponent } from './contactform/contactform.component';
import {HomeComponent} from './routes/home/home.component';
import {NewcoursesComponent} from './routes/newcourses/newcourses.component';
import {OfficesComponent} from './routes/offices/offices.component';
import {OffersComponent} from './routes/offers/offers.component';
import {VirtualclassComponent} from './routes/virtualclass/virtualclass.component';
import {ReviewsComponent} from './routes/reviews/reviews.component';
import { CourselistComponent } from './routes/home/courselist/courselist.component';
import { CourseComponent } from './routes/home/course/course.component';

import {CourseService} from './services/course.service';
import {ReviewService} from './services/review.service';
import {EnquiryService} from './services/enquiry.service';
import {OfferService}  from './services/offer.service'

import { OverviewComponent } from './routes/home/overview/overview.component';
import { ReviewlistComponent } from './routes/reviews/reviewlist/reviewlist.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { DiscountPipe } from './pipes/discount.pipe';
import { CoursefilterPipe } from './pipes/coursefilter.pipe';
import { ScheduleComponent } from './routes/schedule/schedule.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferDirective } from './directives/offer.directive';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const route=[
  {path:"",component:HomeComponent},
  {path:"offices",component:OfficesComponent},
  {path:"offers",component:OffersComponent},
  {path:"vclass",component:VirtualclassComponent},
  {path:"reviews",component:ReviewsComponent},
  {path:"ncourses",component:NewcoursesComponent},
  {path:"cdetails/:ccode",component:OverviewComponent},
  {path:"schedules",component:ScheduleComponent,outlet:"sidebar"}
  
]

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    LeftbodyComponent,
    RightbodyComponent,
    SlideshowComponent,
    ContactformComponent,
    HomeComponent,
    NewcoursesComponent,
    OfficesComponent,
    OffersComponent,
    VirtualclassComponent,
    ReviewsComponent,
    CourselistComponent,
    CourseComponent,
    OverviewComponent,
    ReviewlistComponent,
    ReviewComponent,
    DiscountPipe,
    CoursefilterPipe,
    ScheduleComponent,
    HighlightDirective,
    OfferDirective
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route),HttpClientModule,FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }), ReactiveFormsModule
  ],
  providers: [CourseService,ReviewService,EnquiryService,OfferService],
  bootstrap: [AppComponent]
})
export class AppModule { }
