import styles from './BooksItem.module.scss'

export default function BooksItem({book}) {
    return (
        <div className={styles.Container}>
            
            <div className={styles.Photo}>
                <span className="material-icons-outlined">
                    visibility
                </span>
            </div>
            <div className={styles.Text}>
                <h2>Название книги {book.name}</h2>
                <div>
                    <span className={styles.AuthorLabel}>
                        Автор: </span>
                    <span className={styles.Author}>
                        Автор Книги</span>
                </div>
            </div>
            
        </div>
    )
}