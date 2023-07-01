import { FormControl } from "@angular/forms";

export interface loginRequest {
    username?: FormControl<string>;
    password?: FormControl<string>;
}