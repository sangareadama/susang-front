import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandle } from '../../modelAdmin/FileHandle';
import { Utilisateur } from '../../modelAdmin/Utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurImageDatailService {

  constructor(private sanitizer:DomSanitizer ) { }


//   for (let i =1;i<this.utilisateurs.length; i++){

//     if(this.utilisateurs[i].id==utilisateur.id){

//      this.utilisateurReturned=this.utilisateurs[i];
//     }
//     else{

//      const utilisateurImage:any[]=utilisateur.utilisateurImage;

//      const utilisateurImagesToFileHandle:FileHandle[]=[];
 
//      for (let i =0;i<utilisateurImage.length; i++){
 
//        const imageFileData=utilisateurImage[i]; 
 
//        const imageBlod=this.dataURItoBlob(imageFileData.picByte,imageFileData.type);
 
//        const imageFile= new File([imageBlod],imageFileData.name,{type:imageFileData.type});
 
//        const finalFileHandle:FileHandle={
//          file:imageFile,
//          url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
//        };
//        utilisateurImagesToFileHandle.push(finalFileHandle);
//      }
 
//      utilisateur.utilisateurImage=utilisateurImagesToFileHandle; 
 
//      this.utilisateurs.push(utilisateur);

     
//      this.utilisateurReturned=utilisateur;
//     }

//    }
   
//    return this.utilisateurReturned;
  
// }

  public createImage(utilisateur:Utilisateur){
    const utilisateurImage:any[]=utilisateur.utilisateurImage;

    const utilisateurImagesToFileHandle:FileHandle[]=[];
  
    for (let i =0;i<utilisateurImage.length; i++){

      const imageFileData=utilisateurImage[i]; 

      const imageBlod=this.dataURItoBlob(imageFileData.picByte,imageFileData.type);

      const imageFile= new File([imageBlod],imageFileData.name,{type:imageFileData.type});

      const finalFileHandle:FileHandle={
        file:imageFile,
        url:this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(imageFile))
      };
      utilisateurImagesToFileHandle.push(finalFileHandle);
    }

    utilisateur.utilisateurImage=utilisateurImagesToFileHandle;

    return utilisateur;
  }

  public dataURItoBlob(picByte:any,imageType:any){

    const byteString=window.atob(picByte);

    const arrayBuffer=new ArrayBuffer(byteString.length);

    const int8Array= new Uint8Array(arrayBuffer);

    for(let i=0;i<byteString.length;i++){
      int8Array[i]=byteString.charCodeAt(i);
    }   

    const blob=new Blob([int8Array],{type:imageType});

    return blob;
  }
}
