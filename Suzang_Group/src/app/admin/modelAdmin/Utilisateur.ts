// export interface Utilisateur{
//     nom:String;
//     prenom:String;
//     username:String;
//     password:String;
// }

import { FileHandle } from "./FileHandle";
import { Role } from "./Role";

export class Utilisateur {
    static id: any;
    static utilisateurImage: any[];
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public username: string,
        public password: string,
        public utilisateurImage: FileHandle[],
        public roles:Role[],
        
    ) {
        
    }
}