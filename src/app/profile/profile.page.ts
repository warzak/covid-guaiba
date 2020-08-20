import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  form: FormGroup;
  sexos: Array<string>;

  constructor(
      public formBuilder: FormBuilder,
      private router: Router
  ) { }

  ngOnInit() {

    this.sexos = [
      "Masculino",
      "Feminino"
    ];

    this.form = this.formBuilder.group({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      celular: new FormControl(''),
      email: new FormControl(''),
      sexo: new FormControl(''),
    });
  }


  onSubmit(values){
    console.log(values);
    this.router.navigate(["/profile"]);
  }

}
