import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Card } from '../../interfaces/card';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() cards: Array<Card>;
  @Output() updateList: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fetchCards() {
    this.updateList.emit();
  }
}
