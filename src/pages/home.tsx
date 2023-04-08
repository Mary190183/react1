import React, { useEffect, useState } from 'react';
import Card from '../components/card';
// import data from '../data/plants.json';
import SearchBar from '../components/SearchBar/SearchBar';

export const SearchPlants = (filterItems: [], searchWord: string) => {
  if (filterItems && filterItems.length > 0) {
    const newPlantArray = filterItems.filter(
      (plant: { 'Common name': []; 'Latin name': string }) => {
        const { 'Common name': common, 'Latin name': latin } = plant;
        const regex = new RegExp(`W*(${searchWord})W*`, 'i');
        const latinNameMatch = regex.test(latin);
        const commonName = common?.find((name: string) => {
          return regex.test(name);
        });
        if (latinNameMatch) return true;
        if (commonName) return true;
        return false;
      }
    );
    console.log('RETURNING PLANTS:', newPlantArray.length);

    return newPlantArray;
  }
};

function Home() {
  const [items, setItems] = useState<[]>([]);
  const [query, setQuery] = useState<string>(localStorage.getItem('query') || '');
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    if (items && query) {
      const searchResults = SearchPlants(items, query);
      setFilterData(searchResults ? searchResults : []);
    }
  }, [query, items]);
  useEffect(() => {
    fetchMe();
  }, []);
  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);
  const fetchMe = () => {
    const plant = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '2ec27a21bcmshfbd66557dff6f41p123426jsn7190274cffc7',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
      },
    };
    fetch('https://house-plants2.p.rapidapi.com/all-lite', plant)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setItems(data);
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <section id="home1" className="container_home" data-testid="home">
      <div>
        <SearchBar onSubmit={handleSubmit} value={query} onChange={(e) => onChangeHandler(e)} />
      </div>
      {query === '' || filterData.length > 0 ? (
        <section id="home" className="container_home">
          {filterData.map((item) => {
            const {
              id,
              Climat,
              Img,
              Family,
              'Common name': Common_name,
              'Latin name': Latin_name,
            } = item;
            return (
              <Card
                key={id}
                id={id}
                climate={Climat}
                img={Img}
                common={Common_name}
                latin={Latin_name}
                family={Family}
              />
            );
          })}
        </section>
      ) : (
        <div>NOT FOUND</div>
      )}
    </section>
  );
}
export { Home };
