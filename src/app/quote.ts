


//       export class Quote {
//         showAuthor: boolean;
//         constructor(public id: number,public Author: string,public genre: string,public name:string,public completeDate: Date){
//           this.showAuthor=false;
    

// }
// }
export class Quotes {
  showDetails!: boolean;
  constructor(public genre:string, public author:string, public body:string,public description:string , public datepublished:Date){
      this. showDetails = false;
  }

}

