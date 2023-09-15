import { Component } from '@angular/core';
import { store } from '../store/store';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  actionClicked = false;
  constructor(private store: store) {

  }
itemsList = [{item: 'Iphone', model: '2024'}, {item: 'Nokie', model: '2021'}, {item: 'Samsung', model: '2023'}]
addItem(index: number) {
  this.store.setState({itemsList: this.itemsList[index]});
  this.itemsList.splice(index, 1);
  this.actionClicked = true;
}
}
