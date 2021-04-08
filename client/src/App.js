import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './pages/Home';
import Bee from './pages/Bee';
import Butterfly from './pages/Butterfly';
import Bird from './pages/Bird';
import Favorites from './pages/Favorites';
import FooterNavigation from './components/FooterNavigation'
import Searchbar from './components/Searchbar';
import { useEffect, useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage'




function App() {
  const LOCAL_STORAGE_KEY = 'favouritesList'

  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [favorites, setFavorites] = useLocalStorage(LOCAL_STORAGE_KEY, []);



  useEffect(() => {
    fetch('http://localhost:4000/api/plants')
      .then(res => {
        console.log(res)
        return res.json()
      })
      .then(data => {
        console.log(data)
        setPlants(data)
        setIsLoading(false)
      })
      .catch((err) => console.log(err.message))
  }, []);



  function selectFavorites(plantId) {

    const selectedFavorites = plants.find((plant) => plantId === plant._id)
    const favoriteAlreadyExists = favorites.find((plant) => plantId === plant._id)

    if (favoriteAlreadyExists) {
      setFavorites(favorites)
    } else {
      setFavorites([...favorites, selectedFavorites])
    }
  }

  function removeFavorites(plantIdToRemove) {
    const remainingFavorites = favorites.filter((plant) => plantIdToRemove !== plant._id)
    setFavorites(remainingFavorites)
  }

  function isFavorite(favorites, id) {
    return favorites.some((favorite) => favorite._id === id)
  }

  return (
    <div className='App'>
      {plants && <Searchbar plants={plants} />}
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Bee'>
          {isLoading && <div>Loading...</div>}
          {plants && <Bee plants={plants} onSelectFavorites={selectFavorites} isFavorite={isFavorite} favorites={favorites} />}
        </Route>
        <Route path='/Butterfly'>
          {isLoading && <div>Loading...</div>}
          {plants && <Butterfly plants={plants} />}
        </Route>
        <Route path='/Bird'>
          {isLoading && <div>Loading...</div>}
          {plants && <Bird plants={plants} />}
        </Route>
        <Route path='/Favorites'>
          <Favorites favorites={favorites} isFavorite={isFavorite} onSelectFavorites={removeFavorites} />
        </Route>
      </Switch>
      <FooterNavigation plants={plants} />
    </div>
  );
}

export default App;
