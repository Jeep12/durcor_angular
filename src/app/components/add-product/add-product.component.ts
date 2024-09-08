import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm: FormGroup;
  selectedFiles: File[] | any = [];
  imagePreviews: string[] = [];
  categories = [
    { id: 1, name: 'Electrónica' },
    { id: 2, name: 'Ropa' },
    { id: 3, name: 'Hogar' }
    // Aquí puedes cargar dinámicamente las categorías desde un servicio
  ];
  isPanelOpen = false; // Controla el estado del acordeón

  constructor(private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      marca: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: [''],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      categoria_id: ['', Validators.required]
    });
  }

  // Manejo de selección de archivos
  onFileSelected(event: any) {
    const files = Array.from(event.target.files);
    this.selectedFiles = [...this.selectedFiles, ...files];  // Añadir nuevas imágenes a las seleccionadas

    // Actualizar las vistas previas
    files.forEach((file: any) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreviews.push(e.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      alert('Por favor, completa todos los campos obligatorios.');
      return;
    }

    const formData = new FormData();
    formData.append('marca', this.productForm.get('marca')?.value);
    formData.append('nombre', this.productForm.get('nombre')?.value);
    formData.append('descripcion', this.productForm.get('descripcion')?.value);
    formData.append('precio', this.productForm.get('precio')?.value ? this.productForm.get('precio')?.value.toString() : '0');
    formData.append('stock', this.productForm.get('stock')?.value ? this.productForm.get('stock')?.value.toString() : '0');
    formData.append('categoria_id', this.productForm.get('categoria_id')?.value);

    // Añadir las imágenes seleccionadas
    this.selectedFiles.forEach((file: any, index: any) => {
      formData.append(`imagen_${index}`, file, file.name);
    });

    // Enviar el formulario al servicio (llamar a la API)
    // this.productService.addProduct(formData).subscribe(response => {
    //   console.log('Producto agregado:', response);
    // });
  }

  // Método para alternar el estado del panel del acordeón
  togglePanel() {
    this.isPanelOpen = !this.isPanelOpen;
  }
}
