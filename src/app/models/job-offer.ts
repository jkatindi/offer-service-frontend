import  {ProfilOffer} from "./profil-offer";
import   {DegreeOffer} from "./degree-offer";
import   {TechSkillOffer} from "./techSkill-offer";
import {InfoGeneral} from "./info-General";
import {Experience} from "./experience";

export  class JobOffer {

   id!: string;
   title!: string
   requiredTechs!: Array<TechSkillOffer>;
   requiredDegrees!: Array<DegreeOffer>;
   generalInfo!: InfoGeneral;
   positionHeld!: string;
   generalProfile!: string;
   requiredExperience!: Experience ;
   availablePlace!: number;



}
