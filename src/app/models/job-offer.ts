import   {DegreeOffer} from "./degree-offer";
import   {TechSkillOffer} from "./techSkill-offer";
import {InfoGeneral} from "./info-General";


export  class JobOffer {

   id!: string;
   title!: string
   generalInfo!: InfoGeneral;
   positionHeld!: string;
   generalProfile!: string;
   requiredTechs!: Array<TechSkillOffer>;
   requiredDegrees!: Array<DegreeOffer>;
   experMin!:number;
   availablePlace!: number;




}
