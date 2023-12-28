import   {DegreeOffer} from "./degree-offer";
import   {TechSkillOffer} from "./techSkill-offer";
import {InfoGeneral} from "./info-General";
import { Observable } from 'rxjs/internal/Observable';

export class JobOffer {

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
export interface  PageJobOffer{
   jobOffers?: JobOffer[];
   page?: number;
   size?: number;
   totalPages?: number;
}
