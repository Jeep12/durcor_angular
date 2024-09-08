import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  currentStep: number = 1;
  errorMessage: string = "";
  successMessage: string = '';
  validEmail = false;
  passwordMatch = false;
  passwordRequirements = {
    length: false,
    uppercase: false,
    specialChar: false,
    number: false
  };

  loading = false;

  isPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder, private authService:AuthService) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      nick: [''],
      nombre: [''],
      apellido: [''],
      direccion: [''],
      telefono: ['']
    });

    this.registerForm.get('password')?.valueChanges.subscribe(value => {
      this.checkPasswordRequirements(value);
    });

    this.registerForm.get('confirmPassword')?.valueChanges.subscribe(value => {
      this.checkPasswordMatch(value);
    });
  }

  nextStep() {
    if (this.currentStep === 1) {
      // Validar el email cuando se intenta pasar al siguiente paso
      if (!this.isEmailValid()) {
        this.messageError("Error: Email inválido");
        return; // Detener el avance si el email no es válido
      } else {
        this.errorMessage = ''; // Limpiar el mensaje de error si el email es válido
      }
    } else if (this.currentStep === 2) {
      // Validar los requisitos de la contraseña y la coincidencia de contraseñas antes de avanzar
      if (!this.passwordMatch) {
        this.messageError("Error: Las contraseñas no coinciden");
        this.errorMessage = ''; // Limpiar el mensaje de error si el email es válido

        return; // Detener el avance si las contraseñas no coinciden
      }

      if (!this.passwordRequirements.length || !this.passwordRequirements.uppercase || !this.passwordRequirements.specialChar || !this.passwordRequirements.number) {
        this.messageError("Error: La contraseña no cumple con todos los requisitos");
        return; // Detener el avance si los requisitos de la contraseña no se cumplen
      }
    }

    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }
register(){

}
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.loading = true; // Mostrar el loader

      this.authService.register(this.registerForm.value).subscribe(
        response => {
          this.loading = false; // Ocultar el loader
          this.successMessage = '¡Cuenta creada satisfactoriamente! Se le ha enviado un email para confirmar su identidad.';
        },
        error => {
          this.loading = false; // Ocultar el loader
          this.errorMessage = 'Hubo un problema al crear la cuenta. Intente nuevamente.';
        }
      );
    } else {
      this.errorMessage = 'Por favor, complete todos los campos requeridos.';
    }
  }

  isEmailValid(): boolean {
    this.validEmail = true;
    const emailControl = this.registerForm.get('email');
    return emailControl?.valid || false;
  }

  messageError(textError: string) {
    this.errorMessage = textError;
  }

  checkPasswordRequirements(password: string) {
    this.passwordRequirements.length = password.length >= 8;
    this.passwordRequirements.uppercase = /[A-Z]/.test(password);
    this.passwordRequirements.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    this.passwordRequirements.number = /[0-9]/.test(password);
  }

  checkPasswordMatch(confirmPassword: string) {
    const password = this.registerForm.get('password')?.value;
    this.passwordMatch = password === confirmPassword;
  }


    // Métodos para mostrar/ocultar las contraseñas
    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  
    toggleConfirmPasswordVisibility() {
      this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
    }


    
}
