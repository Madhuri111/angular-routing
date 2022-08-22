// building a data model to present formcontrols


//here we are establishing a data control to represent form controls
// and then we populate the model with sample data

// a dynamic form requires an object model that can describe all scenarios needed by the form functinality

// for example in the angular doc example,in the question data base the form must ask a question and accept an answer.

// a dynamic form uses a service to create a form based on form model
export class FormValues<T> {
    // this contains two types of parameters. one of them is value and other one is type options.
    // each form field has a unique field to see what is going on in that field
    key:string;
    value:T | undefined;
    required:boolean;
    validator:string;
    order:number;
    disabled:boolean;
    controlType:string;
    label:string;
    type:string;
    options: { key: string; value: string  }[];




    //whenever we call this class,our form module can be accessed here

    constructor(optionss: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        validator?: string;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string; value: string }[];
    }={})
    {
        this.value=optionss.value || undefined ;
        this.key = optionss.key || "";
        this.label = optionss.label || "";
        this.required = !!optionss.required;
        this.validator = optionss.validator || "";
        this.order = optionss.order === undefined ? 1 : optionss.order;
        this.controlType = optionss.controlType || "";
        this.type = optionss.type || "";
        this.options = optionss.options || [];

        

    }
}

// export class FormValues<T> {
//     value: T|undefined;
//     key: string;
//     label: string;
//     required: boolean;
//     order: number;
//     controlType: string;
//     type: string;
//     options: {key: string, value: string}[];
  
//     constructor(options: {
//         value?: T;
//         key?: string;
//         label?: string;
//         required?: boolean;
//         order?: number;
//         controlType?: string;
//         type?: string;
//         options?: {key: string, value: string}[];
//       } = {}) {
//       this.value = options.value;
//       this.key = options.key || '';
//       this.label = options.label || '';
//       this.required = !!options.required;
//       this.order = options.order === undefined ? 1 : options.order;
//       this.controlType = options.controlType || '';
//       this.type = options.type || '';
//       this.options = options.options || [];
//     }
//   }