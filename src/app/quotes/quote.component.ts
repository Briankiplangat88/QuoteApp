import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotebook',
  templateUrl: './quotebook.component.html',
  styleUrls: ['./quotebook.component.css']
})
export class QuotebookComponent implements OnInit {
  quotes:Quote[]=[

    quote: Quotes[]=[
      new Quotes(
        'love',
        'John Green',
        'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
        'it tells more of the love life',
        new Date(2000,3,10)
      ),
      new Quotes(
        'war',
        'anonymous',
        'Our Generation has had no Great war, no Great Depression. Our war is spiritual. Our depression is our lives.',
        'tels of the strugles we go through',
        new Date(2021,3,4)
      ),
    ];
    addNewQuote(quote){
    
      quote.datepublished= new Date(quote.completeDate)
      this.quote.push(quote);
    }
    
  
    toggle(index){
      this.quote[index].showDetails = !this.quote[index].showDetails;
    }
    completeGoal(isComplete, index){
      if (isComplete) {
        this.quote.splice(index,1);
      }
    }
    constructor() { }
  
    ngOnInit(): void {
    }
  
  }

//     new Quote(1,'René Descartes','I think, therefore I am','life',new Date(1738,2,1)),
//     new Quote (2,'anonymous','When life gives you lemons, make lemonade','life',new Date(1938,2,6)),
//     new Quote(3,'kipchoge keino','no human is limited','motivation',new Date(2019,12,10)),
//     ];
//     toggleDetails(index:any){
//       this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  
//     }
  
//   quoteComplete(isComplete:any, index:any){
//     if (isComplete) {
//       this.quotes.splice(index,1);
//     }
//   }
  
//   addNewQuote(quote:any){
//     let quoteLength = this.quotes.length;
//     quote.id = quote.Length+1;
//     quote.publishDate = new Date(quote.publishDate)
//     this.quotes.push(quote)
//   }
  

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
