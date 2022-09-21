import { Component, OnInit } from '@angular/core';
import {ServiceOffer} from "../../../services/service.offer";
import {JobOffer} from "../models/job-offer";
import  {FormBuilder}from "@angular/forms";

import {TechSkillOffer} from "../models/techSkill-offer";
import {DegreeOffer} from "../models/degree-offer";
import {FormGroup} from "@angular/forms";
import {ProfilOffer} from "../models/profil-offer";
import { Router } from '@angular/router';
import {Experience} from "../models/experience";
import {InfoGeneral} from "../models/info-General";

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css']
})
export class NewOfferComponent implements OnInit {
  offer=new JobOffer();
  titleForm! : FormGroup;
  companyForm! :FormGroup;
  experienceForm!: FormGroup;
  techsForm!: FormGroup;
  technologies!: TechSkillOffer[];
  degrees!: DegreeOffer[];

  constructor(private offerService: ServiceOffer,
              private  fb:FormBuilder,private router: Router) { }

  ngOnInit(): void {
    this.offerService.getAllTechnologies()
      .subscribe(data => this.technologies = data);

    this.offerService.getAllDegrees()
      .subscribe(data =>{
        this.degrees=data;
        console.log(data);
      });

    this.titleForm = this.fb.group({
       title: [''],
       positionHeld: [''],
       availablePlace: [null]
       });
    this.companyForm=this.fb.group({
        localisation: [''],
        companyDescription: [''],
        companyName: ['']
    })

    this.techsForm= this.fb.group({
        generalProfil:  [''],
        requiredTechs: [null],
        requiredDegrees: [null],
      })

      this.experienceForm=this.fb.group({
        experMin: [null],experMax: [null]
      });




  }
   addnewOffer(): void {
     this.offer.title=this.titleForm.controls['title'].value;
     this.offer.positionHeld=this.titleForm.controls['positionHeld'].value;
     this.offer.availablePlace=this.titleForm.controls['availablePlace'].value;
     this.offer.requiredTechs=this.techsForm.controls['requiredTechs'].value;
     this.offer.requiredDegrees=this.techsForm.controls['requiredDegrees'].value;
     this.offer.generalProfile=this.techsForm.controls['generalProfil'].value;

     let genInfo=new InfoGeneral();
         genInfo.companyName=this.companyForm.controls['companyName'].value;
         genInfo.companyDescription=this.companyForm.controls['companyDescription'].value;
         genInfo.localisation=this.companyForm.controls['localisation'].value;
     let exper = new Experience();
         exper.experMin=this.experienceForm.controls['experMin'].value;
         exper.experMax=this.experienceForm.controls['experMax'].value;

     this.offerService.addNewJobOffer(this.offer).subscribe(response => {
          console.log(response)
     })

   }
   confirmeOffer(): void {
    this.addnewOffer();
   }


}
