import React, {useState, useEffect} from 'react'
import BooksList from './BooksList'
import Loader from '../Loader'
import styles from './BooksSearch.module.scss'

function BooksSearch() {
    const booksArr = [
        {name: 1},
        {name: 2},
        {name: 3},
        {name: 4},
    ]
    const [value, setValue] = useState('')
    const [data, setData] = useState('')
    const [loading] = useState(true)

    useEffect(() => {
      fetch("http://openlibrary.org/search.json?author=tolkien").then((response) => response.json()).then((data) => setData(data));
  
      console.log(data);
    }, [])

    function submitSearch(event) {
        event.preventDefault()
        if (value.trim()) {
            console.log(value);
        }
    }

    return (
        <form onSubmit={submitSearch}>
            <div className={styles.Container}>
                <input className={styles.Input} placeholder="Поиск книги..." value={value} onChange={event => setValue(event.target.value)} />
                <button type="submit" className={styles.Button}>
                <span className="material-icons-outlined">
                    search
                </span>
                </button>
            </div>
            {loading && <Loader />}
            <div>
                <BooksList books={booksArr} />
            </div>
        </form>
    )
}

export default BooksSearch;