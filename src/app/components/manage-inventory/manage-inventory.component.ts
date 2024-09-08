// manage-inventory.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-manage-inventory',
  templateUrl: './manage-inventory.component.html',
  styleUrls: ['./manage-inventory.component.css']
})
export class ManageInventoryComponent implements OnInit {
  isOffcanvasOpen = false;
  products: any[] = [];
  currentPage = 1;
  itemsPerPage = 30;
  totalPages = 0;
  pages: number[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
      this.totalPages = Math.ceil(this.products.length / this.itemsPerPage);
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updatePage();
    });
  }

  updatePage(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.products = this.products.slice(startIndex, endIndex);
  }

  openOffcanvas() {
    this.isOffcanvasOpen = true;
  }

  closeOffcanvas(event?: MouseEvent) {
    if (event && (event.target as HTMLElement).classList.contains('offcanvas')) {
      this.isOffcanvasOpen = false;
    }
    // También cerramos el offcanvas al hacer clic en la "X"
    if (!event || (event.target as HTMLElement).classList.contains('btn-close')) {
      this.isOffcanvasOpen = false;
    }
  }

  stopPropagation(event: MouseEvent) {
    event.stopPropagation(); // Evita que se cierre al hacer clic dentro del contenido
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePage();
    }
  }
}
