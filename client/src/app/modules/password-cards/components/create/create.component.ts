import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Output() updateList: EventEmitter<any> = new EventEmitter();

  showForm = false;
  newCard: Card = {
    url: '',
    name: '',
    username: '',
    password: ''
  } as Card;

  constructor() {}

  ngOnInit(): void {
  }

  clickNewPassword(){
    this.showForm = !this.showForm;
  }

  fetchCards(){
    this.updateList.emit();
    this.clickNewPassword();
  }

}
