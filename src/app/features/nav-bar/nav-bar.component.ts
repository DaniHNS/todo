import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `<nav class="navbar navbar-dark bg-success">
  <a href="#">
      <img src="../../assets/imgToDo.png" width="30" height="30" alt="">
  </a>
  <span class="navbar-tet text-white font-weight-bold">{{"ToDo List" | uppercase}}</span>
</nav>`
})
export class NavBarComponent {}
