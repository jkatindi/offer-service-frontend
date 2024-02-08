import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, Observable, of} from "rxjs";
import {JobOffer, PageJobOffer} from "../models/job-offer";
import {AuthentificationService} from "./authentification.service";

@Injectable()
export  class ServiceOffer
{
   hostQuery:string = "http://localhost:8087/query";
   hostCommand: string= "http://localhost:8087/command/offers";
   jobOffers!:JobOffer[];

   constructor(private  http: HttpClient,private authService: AuthentificationService) {


   }

   getAllJobOffers(): Observable<JobOffer[]> {
        return  this.http.get<Array<JobOffer>>(this.hostQuery+"/offers/all");
   }

   getPageJobOffers(page: number, size: number,listOffer:JobOffer[]): Observable<PageJobOffer> {
    this.jobOffers=listOffer;
    let index=page*size;
    let totalPages=~~(this.jobOffers.length/size);
    if(this.jobOffers.length%size !=0)
       totalPages++;
    let pageOffers=this.jobOffers.slice(index,index+size);
    return of({page: page,size: size,totalPages: totalPages,jobOffers: pageOffers });
   }


   getJobOfferById(id:string): Observable<JobOffer> {
     return  this.http.get<JobOffer>(this.hostQuery+"/offers/all/"+id);
   }

   updateJobOff(job: JobOffer): Observable<any>{
      return  this.http.put(this.hostCommand+"/updateOffer",job);

   }

   addNewJobOffer(offer: JobOffer){
     return this.http.post(this.hostCommand+"/addOffer",offer)
       .pipe(map(response=>response.valueOf()));
   }

   getOneTechnology(id:number): Observable<any>{
      return  this.http.get(this.hostQuery+"/technologies/"+id)

   }

   getAllTechnologies(): Observable<any>{
     return  this.http.get<Array<any>>(this.hostQuery+"/technologies/all");
   }

   getOneDegree(id:number): Observable<any>{
     return  this.http.get<any>(this.hostQuery+"/degrees/"+id);
   }

   getAllDegrees(): Observable<any>{
    return  this.http.get<Array<any>>(this.hostQuery+"/degrees/all");
  }

  research(keyWord: String) : Observable<JobOffer[]>{
    return  this.http.get<Array<JobOffer>>(this.hostQuery+"/all/offers/"+keyWord);
  }

  updataResources(resources: JobOffer[])
  {
     this.jobOffers=resources;

  }

  getResourceOffers(): JobOffer[]{
    this.getAllJobOffers().subscribe(data=>this.jobOffers=data)
    return  this.jobOffers;
  }

}
