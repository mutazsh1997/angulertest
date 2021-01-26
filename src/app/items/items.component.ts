import { Component, OnInit } from '@angular/core';
import { ItemService } from '../services/item.service';
import { Item } from '../module/Items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getItems().subscribe(item => {
      console.log(item);
      this.items = item;
    });
  }
  deleteItem(event, item: Item) {
    this.editItemFalse();
    this.itemService.deleteItem(item);
  } 
  updateItem(item: Item) {
    this.itemService.updateItem(item);
    this.editItemFalse();
  }
  editItem(event, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }
  editItemFalse() {
    this.editState = false;
    this.itemToEdit = null;
  }

}
