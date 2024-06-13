import { useState } from 'react'
import './App.css'
import 'flowbite';
import MyNav from './components/MyNav/MyNav';
import MyFooter from './components/MyFooter/MyFooter';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import horror from './books/horror.json';
import scifi from './books/scifi.json';
function App() {
 
  let [type, setType] = useState('fantasy');
  const [search, setSearch] = useState('');
  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <>
      <MyNav search={search} handleSearch={handleSearch}/>
      <Welcome className="container mx-auto" />
      <button type="button" onClick={() => setType('history')} className="mx-auto text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">History</button>
      <button type="button" onClick={() => setType('fantasy')} className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Fantasy</button>
      {type === 'fantasy' && <AllTheBooks books={fantasy} />}
      {type === 'history' && <AllTheBooks books={history} />}
      <AllTheBooks books={horror} />
      <AllTheBooks books={scifi} />
      <MyFooter />
    </>
  )
}

export default App
