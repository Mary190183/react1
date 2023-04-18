import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { AppDispatch, RootState } from '../../store';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Loading } from '../../components/Loading';
import { Modal } from '../../components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { DataPlant } from 'types/types';

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

    return newPlantArray;
  }
};

const Home = () => {
  const [isPending, setIsPending] = useState(false);
  const [openedId, setOpenedId] = useState<number | null>(null);
  const [openedImg, setOpenedImg] = useState<string | null>(null);
  const [openedCommon, setOpenedCommon] = useState<string | null>(null);
  const [openedLatin, setOpenedlatin] = useState<string | null>(null);
  const [openedFamily, setOpenedFamily] = useState<string | null>(null);
  const [openedClimat, setOpenedClimat] = useState<string | null>(null);
  const [openedCategories, setOpenedCategories] = useState<string | null>(null);
  const [items, setItems] = useState<[]>([]);
  const [query, setQuery] = useState<string>('');
  const [filterData, setFilterData] = useState([]);
  const cardsSearch = useSelector((state: RootState) => state.cardsSearch.cardsSearch);
  console.log(cardsSearch);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMe());
  }, [dispatch]);
  useEffect(() => {
    const searchResults = SearchPlants(items, query);
    setFilterData(searchResults ? searchResults : []);
  }, [query, items]);

  const fetchMe = () => {
    setIsPending(true);
    const plant = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '5085932200msh848b331681e1c9bp151c83jsn50800328ea46',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
      },
    };
    return (dispatch: AppDispatch) => {
      return fetch('https://house-plants2.p.rapidapi.com/all-lite', plant)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: 'FetchData', data: json });
          setIsPending(false);
          setItems(json);
        })
        .catch((err) => {
          dispatch({ type: 'ERROR', msg: 'Unable to fetch data' });
          console.log(err);
          setIsPending(false);
        });
    };
  };

  const handleSubmit = () => {
    dispatch(fetchMe());
  };

  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQuery(e.target.value);
  };
  const handleOpening = (data: DataPlant) => {
    setOpenedId(data.id);
    setOpenedImg(data.img);
    setOpenedCommon(data.common);
    setOpenedlatin(data.latin);
    setOpenedFamily(data.family);
    setOpenedClimat(data.climate);
    setOpenedCategories(data.categories);
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

  return (
    <section id="home1" className="container_home1" data-testid="home">
      <div>
        <SearchBar
          onSubmit={handleSubmit}
          onChange={onChangeHandler}
          value={query}
          data-testid="button-search"
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
                data-testid="card"
              />
            );
          })}
          {openedId !== null && (
            <Modal
              id={openedId}
              img={openedImg ? openedImg : '-'}
              onClose={handleClosing}
              common={openedCommon ? openedCommon : '-'}
              latin={openedLatin ? openedLatin : '-'}
              family={openedFamily ? openedFamily : '-'}
              climate={openedClimat ? openedClimat : '-'}
              categories={openedCategories ? openedCategories : '-'}
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
