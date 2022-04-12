import { AbstractControl } from "@angular/forms";

export function PasswordValidator(control:AbstractControl): {[key:string]:boolean} |null{
    console.log("validating");
     const password =control.get('password');
     const confirmPassword = control.get('cPass');
    //  if(password?.pristine || confirmPassword?.pristine){
         return password && confirmPassword && password.value !== confirmPassword.value ? {'misMatch':true}: null
    //  }else{
    //      return null
    //  }

 }