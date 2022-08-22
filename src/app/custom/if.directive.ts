import { Directive, Input, OnChanges,  TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]',
  // we should be able to use this directive as ngIf directive
  // attribute directive changes the look and behaviour of element we work on
  // but a structural directive manipulate the DOM by adding or removing element from the DOM

})
export class IfDirective implements OnChanges {

  @Input() appIf:boolean ;


  ngOnChanges() {

    if(this.appIf)
    {
      this.viewcontainerRef.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewcontainerRef.clear();
    }

  }
  // templateref is what is the template that i need to render and wheere i need to render
  // a reference to the template that we want to conditionally display (TemplateRef)

  
  constructor(private templateRef:TemplateRef<any>, 
    private viewcontainerRef:ViewContainerRef
    ) { }

}
