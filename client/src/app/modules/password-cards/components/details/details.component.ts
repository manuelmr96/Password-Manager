import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../../interfaces/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() card: Card;
  @Input() index: number;
  @Output() fetchCards: EventEmitter<any> = new EventEmitter();
  showForm = false;

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  login(card: Card){
    window.open(`https://${card.url}`, '_blank');
  }

  copy(card: Card){
    navigator.clipboard.writeText(card.password);
  }

  update(){
    this.showForm = !this.showForm;
  }

  delete(){
    this.cardService
    .delete(this.card.id)
    .subscribe((response: any) => {
      this.fetchCards.emit();
    });
  }

}
