import { FormControl } from "@angular/forms";

export interface resetPasswordRequest {
    password?: FormControl<string>;
    confirmPassword?: FormControl<string>;
}