import { Book } from './book';

export class BookFactory {


    public static createBooks() {
        let bookList: Book[];
        bookList = new Array<Book>();

        const libro1 = new Book();
        libro1.id = 1;
        libro1.autor = 'Eduardo Mendoza';
        libro1.titulo = 'Sin noticias de Gurb';
        libro1.categoria = 'Novela';
        bookList.push(libro1);

        const libro2 = new Book();
        libro2.id = 2;
        libro2.autor = 'En busca del tiempo perdido 01';
        libro2.titulo = 'Marcel Proust';
        libro2.categoria = 'Novela';
        bookList.push(libro2);

        const libro3 = new Book();
        libro3.id = 3;
        libro3.autor = 'Immanuel Wallerstien';
        libro3.titulo = 'El capitalismo historico';
        libro3.categoria = 'Ensayo';
        bookList.push(libro3);

        const libro4 = new Book();
        libro4.id = 4;
        libro4.autor = 'Owen Jones';
        libro4.titulo = 'Chavs, la demonización de la clase obrera';
        libro4.categoria = 'Ensayo';
        bookList.push(libro4);

        const libro5 = new Book();
        libro5.id = 5;
        libro5.autor = 'Lev Tolstói';
        libro5.titulo = 'El diablo';
        libro5.categoria = 'Novela';
        bookList.push(libro5);

        const libro6 = new Book();
        libro6.id = 6;
        libro6.autor = 'F. M. Dostoyevski';
        libro6.titulo = 'Los demonios';
        libro6.categoria = 'Novela';
        bookList.push(libro6);

        const libro7 = new Book();
        libro7.id = 7;
        libro7.autor = 'Houllebecq';
        libro7.titulo = 'Serotonina';
        libro7.categoria = 'Novela';
        bookList.push(libro7);

        const libro8 = new Book();
        libro8.id = 8;
        libro8.autor = 'Luis Soler Díaz';
        libro8.titulo = 'Antonio Mairena en el mundo de la Siguiriya y la Soleá';
        libro8.categoria = 'Flamenco';
        bookList.push(libro8);

        return bookList;
    }

}
