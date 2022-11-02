import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!: FormGroup;
  name!: string;
  departments: string[] = [];
  // myField = new FormControl()
  constructor( 
    private readonly fb: FormBuilder,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.departments = this.route.snapshot.data['departments'];
    this.route.queryParams.subscribe((params:Params) =>{
        this.name = params['name'];
      }
    )
    this.contactForm = this.initForm();
    // this.myField.valueChanges();
    // this.onPathValue();
    // this.onsetValue()
  }
  onPathValue():void{
    this.contactForm.patchValue({ name: 'Edward'});   // Podemos escoger una propiedad para pasarle valores
  }
  onsetValue():void{
    this.contactForm.setValue({ name: 'Hola mundo'});   // Tenemos que setear a todos las propiedades para poder pasarle valores de lo 
  }                                                     // De lo contrario mandará errores


  onSubmit():void{
    console.log('Form ->', this.contactForm.value);
  }
  initForm(): FormGroup{
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      checkAdult: ['',[Validators.required]],
      department: [''],
      comment: ['',[Validators.required]],   
    })
  }
}
