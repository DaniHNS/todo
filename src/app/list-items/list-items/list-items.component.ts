import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
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
  faTrash = faTrashAlt;
  faPencil = faPencilAlt;

  ngOnInit() {
    this.list.push(
      this.addEditItem(1, 'wash', false),
      this.addEditItem(2, 'clean', false),
      this.addEditItem(3, 'finish', false)
    );
  }

  addItem(value: string): void {
   let id = 1;
   const status = false;
   if (this.list[this.list.length - 1] !== undefined) {
    id = this.list[this.list.length - 1].id + 1;
   }
   if (value !== '') {
    this.list.push({id, value, status});
    this.newItem.nativeElement.value = '';
   }
  }

  removeItem(id: number): void {
    this.list.splice(id, 1);
  }

  editItem(id: number): void {
    this.toggle(id);
    this.addEditItem(this.list[id].id, this.list[id].value, this.list[id].status);
  }

  saveItem(id: number): void {
    this.list[id].value = this.editedItem.value;
    this.show = -1;
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
