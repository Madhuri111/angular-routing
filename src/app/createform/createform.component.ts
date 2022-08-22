import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormValues } from '../models_here/base-formelements';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import { NgZone, ViewChild} from '@angular/core';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent  {

  public TemplateForm:FormGroup;

  @Input() input: FormValues<string>;
  @Input() form: FormGroup;
  @Input() index:number;
  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  constructor(private _ngZone: NgZone) {}


  get isValid() { return this.form.controls[this.input.key].valid; }
  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }

  getErrorMessage() {
    if (this.form.controls[this.input.key].hasError('required')) {
      return 'You must enter a value';
    }
    return this.form.controls[this.input.key].hasError('email') ? 'Not a valid email' : '';
  }

}
