import { FormControl } from "@angular/forms";

export interface registerRequest {
    firstName?: FormControl<string>;
    lastName?: FormControl<string>;
    email?: FormControl<string>;
    userName?: FormControl<string>;
    password?: FormControl<string>;
    confirmPassword?: FormControl<string>;
}