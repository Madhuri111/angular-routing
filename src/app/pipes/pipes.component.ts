import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent  {

  title = 'custom_pipes';

  // user =null;

  colors=['blue','white','green']

  users=[
    {name:"CPerson1",age:21},
    {name:"BPerson2",age:22}
  ];

  onClickAdd()
  {
    this.users.push({name:'APerson3',age:80})
  }
}

