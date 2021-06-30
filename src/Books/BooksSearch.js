import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BooksList from './BooksList';
import Loader from '../Loader';
import styles from './BooksSearch.module.scss';
import useDebounce from '../hooks/useDebounced';

function BooksSearch() {
  const booksArr = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }];
  const [data, setData] = useState([])
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value,2000)
  const [loading, setLoading] = useState(false);

  async function fetchBooks() {
      setLoading(true)
    const result = await axios.get('http://openlibrary.org/search.json', {
      params: {
        title: debouncedValue,
      },
  });
  console.log(result);
  setLoading(false)
    
  }
  useEffect(() => {
    if (!debouncedValue || loading) return;
    fetchBooks()
  }, [debouncedValue]);

  return (
    <>
      <div className={styles.Container}>
        <input
          className={styles.Input}
          placeholder='Поиск книги...'
          
          onChange={(event) => setValue(event.target.value)}
        />
        <button onClick={()=>fetchBooks()} className={styles.Button}>
          <span className='material-icons-outlined'>search</span>
        </button>
      </div>
      {loading && <Loader />}
      <div>
        <BooksList books={booksArr} a={"hueta"} />
      </div>
    </>
  );
}

export default BooksSearch;
