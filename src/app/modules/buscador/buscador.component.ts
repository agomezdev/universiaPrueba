import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { BuscadorService } from "./services/buscador.service";

@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.css"]
})
export class BuscadorComponent implements OnInit {
  searchForm: FormGroup;
  users: any;
  selectUser: any;
  liveTemplate: TemplateRef<any>;
  @ViewChild("list") lista: TemplateRef<any>;
  @ViewChild("item") detalle: TemplateRef<any>;

  constructor(
    private fb: FormBuilder,
    private buscadorService: BuscadorService
  ) {}

  ngOnInit() {
    this.initForm();
    this.users = [];
    this.liveTemplate = this.lista;
  }

  //funcion para inicializar el formulario
  initForm(): void {
    this.searchForm = this.fb.group({
      searchInput: ["", Validators.required]
    });
  }

  //funcion que busca resultados en el back
  search() {
    this.buscadorService
      .searchUser(this.searchForm.controls["searchInput"].value)
      .subscribe(res => {
        this.users = res.filter(user => {
          //esta logica debe ir en el servicio
          console.log(user.profile.name);
          return (
            user.profile.name == this.searchForm.controls["searchInput"].value
          );
        });
        console.log(this.users);
      });
  }

  pasarElegido(event) {
    console.log("elegido", event);
    this.selectUser = event;
    this.liveTemplate = this.detalle;
  }
}
