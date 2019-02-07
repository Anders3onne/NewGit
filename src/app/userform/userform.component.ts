import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { User } from "../user";
@Component({
  selector: "app-userform",
  templateUrl: "./userform.component.html",
  styleUrls: ["./userform.component.css"]
})
export class UserFormComponent implements OnInit {
  newUser = new User("");
  @Output() add = new EventEmitter<User>();
  submitForm() {
    this.add.emit(this.newUser);
  }

  constructor() {}

  ngOnInit() {}
}
