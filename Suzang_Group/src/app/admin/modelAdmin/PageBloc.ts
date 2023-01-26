import { ContenusDePage } from "./ContenusDePage";

export class PageBloc{

    constructor(
        public id: number, 
        public titre: string,
        public image: string,
        public contenus:ContenusDePage[],  
    ) { 
        
    }
}