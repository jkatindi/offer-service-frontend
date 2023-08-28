import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable} from "rxjs";
import {JobOffer} from "../models/job-offer";

@Injectable()
export  class ServiceOffer
{
   hostQuery:string = "http://localhost:8087/query";
   hostCommand: string= "http://localhost:8087/command/offers";
   constructor(private  http: HttpClient) {

   }
   getAllJobOffers(): Observable<any> {
        return  this.http.get(this.hostQuery+"/offers/all")
          .pipe(map(response=>response.valueOf()));
   }

   getJobOfferById(id:string): Observable<any> {
     return  this.http.get(this.hostQuery+"/offers/all/"+id)
       .pipe(map(response=>response.valueOf()));
   }
   updateJobOff(job: JobOffer): Observable<any>{
      return  this.http.put(this.hostCommand+"/updateOffer",job)
        .pipe(map(response=>response.valueOf()));
   }

   addNewJobOffer(offer: JobOffer){
     return this.http.post(this.hostCommand+"/addOffer",offer)
       .pipe(map(response=>response.valueOf()));
   }

   getOneTechnology(id:number): Observable<any>{
      return  this.http.get(this.hostQuery+"/technologies/"+id)
        .pipe(map(response=>response.valueOf()));
   }

   getAllTechnologies(): Observable<any>{
     return  this.http.get(this.hostQuery+"/technologies/all")
       .pipe(map(response=>response.valueOf()));
   }

   getOneDegree(id:number): Observable<any>{
     return  this.http.get(this.hostQuery+"/degrees/"+id)
       .pipe(map(response=>response.valueOf()));
   }

   getAllDegrees(): Observable<any>{
    return  this.http.get(this.hostQuery+"/degrees/all")
      .pipe(map(response=>response.valueOf()));
  }
}
