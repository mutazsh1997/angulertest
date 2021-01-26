import { Injectable } from '@angular/core';
import { Item } from '../module/Items';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollections: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  itemDoc: AngularFirestoreDocument<Item>;

  constructor(public afs: AngularFirestore) {
    //this.items = this.afs.collection('items').valueChanges();
    this.itemsCollections = this.afs.collection('items', ref => ref.orderBy('title'));

    this.items = this.itemsCollections.snapshotChanges().pipe(map(changes => {
      return changes.map(data => {
        const getData = data.payload.doc.data() as Item;
        getData.id = data.payload.doc.id;
        return getData;
      });
    }));
  }
  getItems() {
    return this.items;
  }
  addItems(item: Item) {
    this.itemsCollections.add(item);
  }
  updateItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }
  deleteItem(item: Item) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

}