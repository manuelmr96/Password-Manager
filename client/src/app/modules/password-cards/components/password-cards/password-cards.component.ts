import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';
import { Card } from '../../interfaces/card';
import { CardService } from '../../services/card.service';


@Component({
  selector: 'app-password-cards',
  templateUrl: './password-cards.component.html',
  styleUrls: ['./password-cards.component.css']
})
export class PasswordCardsComponent implements OnInit {
  cards: Array<Card> = [];
  loading = false;
  errorData: any = {};
  isDisplayError = false;

  constructor(private cardService: CardService) {
    this.fetchPasswordCards();
  }

  ngOnInit(){ }

  fetchPasswordCards(){
    this.loading = true;
    this.cards = [];
    this.cardService.list()
    .subscribe(
      (response: any) => {
        this.cards = response;
        this.loading = false;
      }, err => {
        this.loading = false;
        this.errorData.message = err.message;
        this.isDisplayError = true;
    });
  }

  hasPasswordCards(){
    return this.cards.length > 0;
  }

  updateList(){
    this.fetchPasswordCards();
  }

  searchByName(name){
    this.loading = true;
    this.cards = [];
    if (name !== ''){
      this.cardService
      .listFilterByName(name)
      .subscribe(
        (response: any) => {
        this.cards = response;
        this.loading = false;
      }, err => {
        this.loading = false;
        this.errorData.message = err.message;
        this.isDisplayError = true;
     });
    } else {
      this.updateList();
    }
  }
}
