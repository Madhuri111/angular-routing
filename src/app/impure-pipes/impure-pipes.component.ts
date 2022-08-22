import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-impure-pipes',
  templateUrl: './impure-pipes.component.html',
  styleUrls: ['./impure-pipes.component.css']
})
export class ImpurePipesComponent  {

  title = 'impure_pipes';

  users=[
    {name:"CPerson1",age:21},
    {name:"BPerson2",age:22}
  ];

  onClickAdd()
  {
    this.users.push({name:'APerson3',age:80})
  }
}
