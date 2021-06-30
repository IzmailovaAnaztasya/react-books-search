import BooksItem from './BooksItem'
import styles from './BooksList.module.scss'

export default function BooksList({books,a}) {
    return (
        <div className={styles.Container}>
            <h1>{a}</h1>
            <ul className={styles.List}>
                { books.map(book => {
                    return <BooksItem book={book} key={book.name} />
                }) }
            </ul>
        </div>
    )
}