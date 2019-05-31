import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoreComponent } from "./core.component";
import { BuscadorModule } from "../modules/buscador/buscador.module";

@NgModule({
  imports: [CommonModule, BuscadorModule],
  declarations: [CoreComponent],
  exports: [CoreComponent]
})
export class CoreModule {}
