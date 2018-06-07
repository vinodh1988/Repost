import { Injectable } from '@angular/core';
import {course} from '../course';
@Injectable()
export class CourseService {
private courses:course[];

  constructor() {
      this.courses=[
          {
            name:"Angular 4",
            image:"angular2.png",
            description:"Google's Single page App Framework",
            price:22000
          },
          {
            name:"ASP.net",
            image:"asp.png",
            description:"DOT NET language for server side coding",
            price:12000
          },
          {
            name:"Amazon web services",
            image:"aws.png",
            description:"Leading cloud service ",
            price: 18000
          },
          {
            name:"Hadoop",
            image:"hadoop.png",
            description:"Ecosystem for BIGDATA",
            price:24000
          },
          {
            name:"CSS3",
            image:"CSS3.png",
            description:"Styling specification for webpages",
            price:10000
          },
          {
            name:"Java",
            image:"java.png",
            description:"Platform neutral language for enterprise solutions",
            price:11000
          },
          {
            name:"React JS",
            image:"react.png",
            description:"UI framework by Facebook",
            price:22000
          },
          {
            name:"Redhat",
            image:"redhat.png",
            description:"Enterprise grade linux OS",
            price:19000
          },
          {
            name:"SQL",
            image:"SQL.png",
            description:"Common standard to interact with RDBMS",
            price:10000
          }
        ];
   }

   getCourses():course[]{
     return this.courses;
   }

}
