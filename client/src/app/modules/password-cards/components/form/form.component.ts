import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../interfaces/card';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() card: Card;
  @Input() index: number;
  @Output() fetchCards: EventEmitter<any> = new EventEmitter();
  @Output() closeForm: EventEmitter<any> = new EventEmitter();

  hide = true;
  cardGroup: FormGroup;

  constructor(
    private cardService: CardService
  ) {}

  ngOnInit(): void {
    this.cardGroup = new FormGroup({
      url: new FormControl(this.card.url, [Validators.required]),
      name: new FormControl(this.card.name, [Validators.required]),
      username: new FormControl(this.card.username, [Validators.required]),
      password: new FormControl(this.card.password, [Validators.required]),
    });
  }

  save(){
    const id = this.card.id;
    this.card = this.cardGroup.value as Card;
    this.card.id = id;
    this.cardService
    .save(this.card, this.index)
    .subscribe(
        (resp: any) => {
          this.fetchCards.emit();
        });
  }

  close(){
    this.closeForm.emit();
  }

}
