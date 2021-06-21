import BooksItem from './BooksItem'
import styles from './BooksList.module.scss'

export default function BooksList(props) {
    return (
        <div className={styles.Container}>
            <ul className={styles.List}>
                { props.books.map(book => {
                    return <BooksItem book={book} key={book.name} />
                }) }
            </ul>
        </div>
    )
}