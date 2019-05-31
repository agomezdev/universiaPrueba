import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input() lista: any;
  @Output() onSelect = new EventEmitter<any>();
  constructor() {}

  ngOnInit() {
    console.log("mi lista", this.lista);
  }

  select(user: any) {
    this.onSelect.emit(user);
  }
}
