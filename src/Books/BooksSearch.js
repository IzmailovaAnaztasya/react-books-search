//import React from 'react'
import styles from './BooksSearch.module.scss'

export default function BooksSearch() {
    return (
        <form>
            <div className={styles.Container}>
                <input className={styles.Input} placeholder="Поиск книги..." />
                <button type="submit" className={styles.Button}>Click</button>
            </div>
        </form>
    )
}