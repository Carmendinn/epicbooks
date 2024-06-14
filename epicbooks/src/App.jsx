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
import CategoryButtons from './components/CategoryButtons';





function App() {
 
  let [type, setType] = useState('fantasy');
  const [search, setSearch] = useState('');

  const handleSearch = (e) => setSearch(e.target.value);
  return (
    <>
      
      <MyNav search={search} handleSearch={handleSearch}/>
      <Welcome className="container mx-auto" />
      <CategoryButtons setType={setType}/>
      {type === 'fantasy' && <AllTheBooks books={fantasy} search={search} />}
      {type === 'history' && <AllTheBooks books={history} search={search}/>}
      {type === 'horror' && <AllTheBooks books={horror} search={search}/>}
      {type === 'scifi' && <AllTheBooks books={scifi} search={search}/>}
      <AllTheBooks books={horror} search={search}/>
      <AllTheBooks books={scifi} search={search}/>
      <MyFooter />
    </>
  )
}

export default App
