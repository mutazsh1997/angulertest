import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { Item } from 'src/app/module/Items';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item: Item = {
    title: '',
    description: ''
  }
  
  constructor (private itemServeice: ItemService) {}
  ngOnInit() {
  }
  onSubmit() {
     
    if(this.item.description != '' && this.item.title != '') {
      this.itemServeice.addItems(this.item); 
      this.item.description = ''
       this.item.title = '';
    }
  }
}
