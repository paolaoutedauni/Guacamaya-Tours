import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  user = {
    name: "",
    email: "",
    password: ""
  };
  registerForm;
  hide = true;
  constructor() {}

  onSubmit(customerData) {
    if (this.registerForm.dirty && this.registerForm.valid) {
      console.log("Data", customerData);
      this.registerForm.reset();
    }
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get name() {
    return this.registerForm.get("name");
  }

  get email() {
    return this.registerForm.get("email");
  }

  get password() {
    return this.registerForm.get("password");
  }
}
