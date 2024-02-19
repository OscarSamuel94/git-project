class Libro {
  constructor(tamanio, formato, paginas, biblioteca) {
    this.tamanio = tamanio;
    this.formato = formato;
    this.paginas = paginas;
    this.biblioteca = biblioteca;
  }

  detalles() {
    return `Tamaño: ${this.tamanio}, formato: ${this.formato}, Paginas: ${this.paginas}, biblioteca: ${this.biblioteca}`;
  }
}

class Aventuras extends Libro {
  constructor(tamanio, formato, paginas, biblioteca, precio) {
    super(tamanio, formato, paginas, biblioteca);
    this.precio = precio;
  }

  precioDetalle() {
    return `El precio del libro ${this.tamanio} es bonito: ${this.precio}`;
  }
}

const vueltaAlMundo = new Aventuras("Grande", "Fisico", "800", "Centro", 450);

console.log(vueltaAlMundo.detalles());
