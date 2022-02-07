import { Quote } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote:Quote | undefined;

@Output() isComplete = new EventEmitter<boolean>();

quoteComplete(complete:boolean){
  this.isComplete.emit(complete);
}
// export class LikeComponent {
  numberOfLikes: number= 0;
  likeButtonClick(){
   this.numberOfLikes ++;

  }
  numberOfDislikes: number= 0;
  dislikeButtonClick(){
   this.numberOfLikes--;
  }
  



  constructor() { }

  ngOnInit(): void {
  }

}
