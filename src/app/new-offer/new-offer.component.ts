import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ServiceOffer} from "../services/service.offer";
import {JobOffer} from "../models/job-offer";
import {FormBuilder, Validators} from "@angular/forms";

import {TechSkillOffer} from "../models/techSkill-offer";
import {DegreeOffer} from "../models/degree-offer";
import {FormGroup} from "@angular/forms";
import { Router } from '@angular/router';
import {InfoGeneral} from "../models/info-General";
import {MatFormFieldControl} from "@angular/material/form-field";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChip, MatChipInputEvent} from "@angular/material/chips";
import {map, Observable, startWith} from "rxjs";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {colors} from "@angular/cli/utilities/color";
export interface TechSkill {
  technology: string;
}


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.component.html',
  styleUrls: ['./new-offer.component.css'],
  providers: [{
    provide: MatFormFieldControl,useExisting: NewOfferComponent
  }]
})
export class NewOfferComponent implements OnInit {
  offer=new JobOffer();
  isLinear = true;
  titleForm!: FormGroup;
  companyForm!: FormGroup;
  experienceForm!: FormGroup;
  techsForm!: FormGroup;
  technologies!: TechSkillOffer[];
  degrees!: DegreeOffer[];
  selectable=true;
  visible=true;
  removable=true;
  separatorKeysCodes: number[] = [ENTER,COMMA];
  addOnBlur=true;
  techSkills: any[]=[];
  response!: Object;
  filteredTechs!: Observable<TechSkillOffer[]>;
  @ViewChild('techInput') techInput!: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete!: MatAutocomplete;

  constructor(private formBuilder: FormBuilder,private offerService: ServiceOffer) {
    }

  ngOnInit() {

    this.offerService.getAllTechnologies()
      .subscribe(data => this.technologies = data);

    this.offerService.getAllDegrees()
      .subscribe(data => this.degrees=data);

    this.titleForm = this.formBuilder.group({
      title: ['',Validators.required],
      positionHeld: ['',Validators.required],
      availablePlace: [null,Validators.required]
    });
    this.companyForm=this.formBuilder.group({
      localisation: ['',Validators.required],
      companyDescription: ['',Validators.required],
      companyName: ['',Validators.required]
    })

    this.techsForm= this.formBuilder.group({
      generalProfil:  ['',Validators.required],
      requiredTechs: [null,Validators.required],
      requiredDegrees: [null,Validators.required],
      experMin: [null,Validators.required]
    });


    this.filteredTechs=this.techsForm.controls['requiredTechs'].valueChanges
      .pipe(startWith(null),
        map((tech:TechSkillOffer | null) => tech ? this._filter(tech) : this.technologies));
  }


  selected(event: MatAutocompleteSelectedEvent): void {
       let techSkill={
            id: event.option.value['id'],
            technology: event.option.value['technology']
       };
       this.techSkills.push(techSkill);
       this.techInput.nativeElement.value = '';
       this.techsForm.controls['requiredTechs'].setValue(null);

  }

  add(event: MatChipInputEvent): void {
      const input = event.input;
      const value = event.value;
      if ((value || ''))
         this.techSkills.push(value);
      if(input){
        input.value='';
      }
      this.techsForm.controls['requiredTechs'].setValue(null);
  }

  remove(tech: TechSkillOffer): void{
    const  index=this.techSkills.indexOf(tech);
    if(index>=0){
      this.techSkills.splice(index,1);
    }
  }


   private _filter(tech: TechSkillOffer): TechSkillOffer[] {
    const valFilter=tech.technology.toLowerCase();
    return this.technologies.filter(tech => tech.technology.toLowerCase().indexOf(valFilter)===0);

  }

  validateOffer() {
    this.addnewOffer();
  }

  addnewOffer(): void {
    this.offer.title=this.titleForm.controls['title'].value;
    let genInfo=new InfoGeneral();
    genInfo.companyName=this.companyForm.controls['companyName'].value;
    genInfo.companyDescription=this.companyForm.controls['companyDescription'].value;
    genInfo.localisation=this.companyForm.controls['localisation'].value;
    this.offer.generalInfo=genInfo;
    this.offer.positionHeld=this.titleForm.controls['positionHeld'].value;
    this.offer.generalProfile=this.techsForm.controls['generalProfil'].value;
    this.offer.requiredTechs=this.techSkills;
    this.offer.requiredDegrees=this.techsForm.controls['requiredDegrees'].value;
    this.offer.experMin=this.techsForm.controls['experMin'].value;
    this.offer.availablePlace=this.titleForm.controls['availablePlace'].value;
    //this.offer.requiredTechs=this.techsForm.controls['requiredTechs'].value;
    console.log(JSON.stringify(this.offer));
    this.offerService.addNewJobOffer(this.offer)
        .subscribe(response=>console.log(response));



  }

}
