export class Book {
    public id: number;
    public autor: string;
    public titulo: string;
    public categoria: string;

    static from(id: number, autor: string, titulo: string, categoria: string) {
        const book = new Book();
        book.id = id;
        book.autor = autor;
        book.titulo = titulo;
        book.categoria = categoria;
    }

    constructor() {}
}
