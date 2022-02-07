import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quotebook',
  templateUrl: './quotebook.component.html',
  styleUrls: ['./quotebook.component.css']
})
export class QuotebookComponent implements OnInit {
  quotes:Quote[]=[

    new Quote(1,'René Descartes','I think, therefore I am','life',new Date(1738,2,1)),
    new Quote (2,'anonymous','When life gives you lemons, make lemonade','life',new Date(1938,2,6)),
    new Quote(3,'kipchoge keino','no human is limited','motivation',new Date(2019,12,10)),
    ];
    toggleDetails(index:any){
      this.quotes[index].showQuote = !this.quotes[index].showQuote;
    }
  quoteComplete(isComplete:any, index:any){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quote.Length+1;
    quote.publishDate = new Date(quote.publishDate)
    this.quotes.push(quote)
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
