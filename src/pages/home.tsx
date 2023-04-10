import React, { FC, useEffect, useState } from 'react';
import Card from '../components/card';
// import data from '../data/plants.json';
import SearchBar from '../components/SearchBar/SearchBar';
import { Loading } from '../components/Loading';
import { Modal } from '../components/Modal';

export const SearchPlants = (filterItems: [], searchWord: string) => {
  if (filterItems && filterItems.length > 0) {
    const newPlantArray = filterItems.filter(
      (plant: { 'Common name': Array<string>; 'Latin name': string }) => {
        const { 'Common name': common, 'Latin name': latin } = plant;
        const regex = new RegExp(`W*(${searchWord})W*`, 'i');
        const commonName = common?.find((name) => {
          return regex.test(name);
        });
        const latinNameMatch = regex.test(latin);
        if (commonName) return true;
        if (latinNameMatch) return true;
        return false;
      }
    );
    console.log('RETURNING PLANTS:', newPlantArray.length);

    return newPlantArray;
  }
};

const Home: FC = () => {
  const [isPending, setIsPending] = useState(false);
  const [openedId, setOpenedId] = useState<number | null>(null);
  const [openedImg, setOpenedImg] = useState<string | null>(null);
  const [openedCommon, setOpenedCommon] = useState<string | null>(null);
  const [openedLatin, setOpenedlatin] = useState<string | null>(null);
  const [openedFamily, setOpenedFamily] = useState<string | null>(null);
  const [openedClimat, setOpenedClimat] = useState<string | null>(null);
  const [openedCategories, setOpenedCategories] = useState<string | null>(null);
  const [items, setItems] = useState<[]>([]);
  const [query, setQuery] = useState<string>(localStorage.getItem('query') || '');
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    const searchResults = SearchPlants(items, query);
    setFilterData(searchResults ? searchResults : []);
  }, [query, items]);
  useEffect(() => {
    fetchMe();
  }, []);
  useEffect(() => {
    localStorage.setItem('query', query);
  }, [query]);
  const fetchMe = () => {
    setIsPending(true);
    const plant = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'b18c204c09msh89a114b4b235ccap162bddjsn254a940390cf',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
      },
    };
    fetch('https://house-plants2.p.rapidapi.com/all-lite', plant)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        localStorage.setItem('query-list', JSON.stringify(data));
        setItems(data);
        setIsPending(false);
      })
      .catch((err) => {
        console.error(err);
        setIsPending(false);
      });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    (e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e);
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  const handleOpening = (
    id: number,
    img: string,
    climate: string,
    family: string,
    latin: string,
    common: string,
    categories: string
  ) => {
    setOpenedId(id);
    setOpenedImg(img);
    setOpenedCommon(common);
    setOpenedlatin(latin);
    setOpenedFamily(family);
    setOpenedClimat(climate);
    setOpenedCategories(categories);
  };

  const handleClosing = () => {
    setOpenedId(null);
    setOpenedImg(null);
    setOpenedCommon(null);
    setOpenedlatin(null);
    setOpenedClimat(null);
    setOpenedFamily(null);
    setOpenedCategories(null);
  };

  const handleSearch: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      (e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e);
    }
  };
  return (
    <section id="home1" className="container_home1" data-testid="home">
      <div>
        <SearchBar
          onSubmit={handleSubmit}
          value={query}
          onChange={onChangeHandler}
          onKeyDown={handleSearch}
        />
      </div>
      {isPending && <Loading />}
      {filterData.length > 0 ? (
        <section id="home" className="container_home">
          {filterData.map((docs) => {
            const {
              id,
              Climat,
              Img,
              Family,
              Categories,
              'Common name': Common_name,
              'Latin name': Latin_name,
            } = docs;
            return (
              <Card
                key={id}
                id={id}
                climate={Climat}
                img={Img}
                common={Common_name}
                latin={Latin_name}
                family={Family}
                onOpening={handleOpening}
                categories={Categories}
              />
            );
          })}
          {openedId !== null && (
            <Modal
              id={openedId}
              img={openedImg}
              onClose={handleClosing}
              common={openedCommon ? openedCommon : '-'}
              latin={openedLatin}
              family={openedFamily ? openedFamily : '-'}
              climate={openedClimat}
              categories={openedCategories}
            />
          )}
        </section>
      ) : (
        <div className="no-results">NOT FOUND</div>
      )}
    </section>
  );
};
export { Home };
