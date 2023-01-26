import { ContenusDePage } from "./ContenusDePage";

export class PageAccueil {
    constructor(
        public id: number,
        public ordre:number,
        public titre: string,
        public image: string,
        public contenus:ContenusDePage[],
        
           
    ) { 
        
    }
}  