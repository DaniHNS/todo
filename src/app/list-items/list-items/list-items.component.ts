import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  @ViewChild('newItem', { static: false }) newItem: ElementRef;
  show: number;
  editedItem: Item = {} as Item;
  list: Item[] = [];

  ngOnInit() {
    this.list.push(
      this.addEditItem(1, 'wash'),
      this.addEditItem(2, 'clean'),
      this.addEditItem(3, 'finish')
    );
  }

  addItem(task: string): void {
    // this.list.length[this.list.length - 1] =  this.list.length[this.list.length - 1] === 0 ? this.list : [];
      this.list.push({ id: this.list[this.list.length - 1].id + 1, value: task});
      this.newItem.nativeElement.value = ' ';
  }

  removeItem(id: number): void {
    this.list.splice(id, 1);
  }

  editItem(id: number): void {
    this.toggle(id);
    this.addEditItem(this.list[id].id, this.list[id].value);
  }

  saveItem(id: number): void {
    this.list[id].value = this.editedItem.value;
    this.show = -1;
  }

  toggle(index: number): void {
    this.show = this.show === index ? this.show = -1 : index;
  }

  addEditItem(id: number , value: string) {
    return { id, value };
  }
}
