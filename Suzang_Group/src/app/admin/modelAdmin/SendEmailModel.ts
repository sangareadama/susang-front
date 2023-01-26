export class SendEmailModel {
    constructor(   
        public nom: string,
        public prenom: string,
        public contact: string,
        public email: string,
        public objet: string, 
        public commentaire: string, 
    ) {
        
    }
}