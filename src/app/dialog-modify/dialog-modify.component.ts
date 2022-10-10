import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ServiceOffer} from "../services/service.offer";
import {TechSkillOffer} from "../models/techSkill-offer";
import {DegreeOffer} from "../models/degree-offer";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {map, Observable, startWith} from "rxjs";
import {MatAutocomplete, MatAutocompleteSelectedEvent} from "@angular/material/autocomplete";
import {MatChipInputEvent} from "@angular/material/chips";

@Component({
  selector: 'app-dialog-modify',
  templateUrl: './dialog-modify.component.html',
  styleUrls: ['./dialog-modify.component.css']
})
export class DialogModifyComponent implements OnInit {
  detail: any;
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


  constructor(@Inject (MAT_DIALOG_DATA) data: any,private _formBuilder: FormBuilder,
              private offerService:ServiceOffer) {
    this.detail=data;
    console.log(this.detail);
  }

  ngOnInit(): void {
      this.offerService.getAllDegrees().subscribe(response=>this.degrees=response);
      this.offerService.getAllTechnologies()
        .subscribe(response=>this.technologies=response);
      this.titleForm = this._formBuilder.group({
      title: [''+this.detail.title,Validators.required],
      positionHeld: [''+this.detail.positionHeld,Validators.required],
      availablePlace: [this.detail.availablePlace,Validators.required]
    });

    this.companyForm=this._formBuilder.group({
      localisation: [''+this.detail.generalInfo.localisation,Validators.required],
      companyDescription: [''+this.detail.generalInfo.companyDescription,Validators.required],
      companyName: [''+this.detail.generalInfo.companyName,Validators.required]
    })

    this.techsForm= this._formBuilder.group({
      generalProfil:  [''+this.detail.generalProfil,Validators.required],
      requiredTechs: [this.detail.requiredTechs,Validators.required],
      requiredDegrees: [this.detail.requiredDegrees,Validators.required],
      experMin: [this.detail.experMin,Validators.required]
    });

    this.filteredTechs=this.techsForm.controls['requiredTechs'].valueChanges
      .pipe(startWith(null),
        map((tech:TechSkillOffer | null) => tech ? this._filter(tech) : this.technologies));
  }

  remove(tech: any) {
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

  private _filter(tech: TechSkillOffer): TechSkillOffer[] {
    const valFilter=tech.technology.toLowerCase();
    return this.technologies.filter(tech => tech.technology.toLowerCase().indexOf(valFilter)===0);

  }
}
