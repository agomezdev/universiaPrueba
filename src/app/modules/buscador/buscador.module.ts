import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BuscadorComponent } from "./buscador.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BuscadorService } from "./services/buscador.service";
import { HttpClientModule } from "@angular/common/http";
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  declarations: [BuscadorComponent, ItemComponent, ListComponent],
  exports: [BuscadorComponent],
  providers: [BuscadorService]
})
export class BuscadorModule {}
