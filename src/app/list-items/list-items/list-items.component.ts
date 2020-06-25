import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Item, Items } from './../../item/item';

@Component({
  selector: 'list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @ViewChild('newItem', { static: false }) newItem: ElementRef;
  public show: number;
  list: Item[] = [];

  editedItem: Item = {} as Item;

  ngOnInit() {
    this.list = [
      { id: 1, value: "wash" },
      { id: 2, value: "clean" },
      { id: 3, value: "finish" }
    ];
  }

  addItem(task) {
    let lastTaskIndex = this.list.length - 1;
    let lastId = this.list[lastTaskIndex].id + 1;
    let tempObj: Item = {} as Item;
    tempObj.id = lastId;
    tempObj.value = task;
    this.list.push(tempObj);
    this.newItem.nativeElement.value = ' ';
  }

  removeItem(id) {
    this.list.splice(id, 1);
  }

  editItem(id) {
    this.toggle(id);
    let tempObj: Item = {} as Item;
    tempObj.id = this.list[id].id;
    tempObj.value = this.list[id].value;
    this.editedItem.id = tempObj.id;
    this.editedItem.value = tempObj.value;
  }

  saveItem(id) {
    this.list[id].value = this.editedItem.value;
    this.show = -1;
  }

  toggle(index) {
    // not triple = no need for type comp
    if (this.show == index) {
      this.show = -1;
    } else {
      this.show = index;
    }
  }
}
