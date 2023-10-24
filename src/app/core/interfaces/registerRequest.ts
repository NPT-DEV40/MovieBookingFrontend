import { FormControl } from "@angular/forms";

export interface registerRequest {
    fullName?: FormControl<string>;
    email?: FormControl<string>;
    userName?: FormControl<string>;
    password?: FormControl<string>;
    confirmPassword?: FormControl<string>;
}