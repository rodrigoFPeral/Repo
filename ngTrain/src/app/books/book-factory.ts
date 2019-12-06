import { Book } from './book';

export class BookFactory {

    public static createBooks(){
        let bookList: Book[];

        const libro1 = new Book();
        libro1.autor = 'Eduardo Mendoza';
        libro1.titulo = 'Sin noticias de Gurb';
        bookList.concat(libro1);

        const libro2 = new Book();
        libro2.autor = 'En busca del tiempo perdido 01';
        libro2.titulo = 'Marcel Proust';
        bookList.concat(libro2);

        const libro3 = new Book();
        libro3.autor = 'Immanuel Wallerstien';
        libro3.titulo = 'El capitalismo historico';
        bookList.concat(libro3);

        const libro4 = new Book();
        libro4.autor = 'Owen Jones';
        libro4.titulo = 'Chavs, la demonización de la clase obrera';
        bookList.concat(libro4);

        const libro5 = new Book();
        libro5.autor = 'Lev Tolstói';
        libro5.titulo = 'El diablo';
        bookList.concat(libro5);

        const libro6 = new Book();
        libro6.autor = 'F. M. Dostoyevski';
        libro6.titulo = 'Los demonios';
        bookList.concat(libro6);

        const libro7 = new Book();
        libro7.autor = 'Houllebecq';
        libro7.titulo = 'Serotonina';
        bookList.concat(libro7);

        return bookList;
    }

}
