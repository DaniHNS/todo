import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Item } from '../../core/model/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  faTrash = faTrashAlt;
  faPencil = faPencilAlt;
  // @ViewChild('newItem', { static: true }) newItem: ElementRef;
  show: number;
  editedItem: Item = {} as Item;
  list: Item[] = [];
  isEditItem: boolean;
  newItem: string;

  ngOnInit() {
    this.list.push(
      this.addEditItem(1, 'wash', false),
      this.addEditItem(2, 'clean', false),
      this.addEditItem(3, 'finish', false)
    );
    this.isEditItem = false;
    this.newItem = '';
  }

  addItem(value: string): void {
   let id = 1;
   const status = false;
   if (this.list[this.list.length - 1] !== undefined) {
    id = this.list[this.list.length - 1].id + 1;
   }
   if (value !== '') {
    this.list.push({id, value, status});
    this.newItem = '';
   }
  }

  removeItem(id: number): void {
    this.list.splice(id, 1);
  }

  editItem(id: number): void {
    this.editedItem.value = this.list[id].value;
    this.isEditItem = true;
    this.toggle(id);
    this.addEditItem(this.list[id].id, this.list[id].value, this.list[id].status);
    this.newItem = '';
  }

  saveItem(id: number): void {
    this.list[id].value = this.editedItem.value;
    this.show = -1;
    this.isEditItem = false;
  }

  toggle(index: number): void {
    this.show = this.show === index ? this.show = -1 : index;
  }

  addEditItem(id: number , value: string, status: boolean = true) {
    return { id, value, status };
  }
  changeTodoStatus(item: Item): void {
    item.status = !item.status;
  }
}
