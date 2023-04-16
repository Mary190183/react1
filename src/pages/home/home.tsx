import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

import SearchBar from '../../components/SearchBar/SearchBar';
import { Loading } from '../../components/Loading';
import { Modal } from '../../components/Modal';
import { useDispatch } from 'react-redux';

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
  const [query, setQuery] = useState<string>(localStorage.getItem('query') || '');
  const [filterData, setFilterData] = useState([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: any = useDispatch();
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
        'X-RapidAPI-Key': '6911f20055mshf5dbae5ebc1f4d4p1080d4jsn2a57a6023eea',
        'X-RapidAPI-Host': 'house-plants2.p.rapidapi.com',
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (dispatch: (arg0: { type: string; data?: []; msg?: string }) => any) => {
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

  return (
    <section id="home1" className="container_home1" data-testid="home">
      <div>
        <SearchBar onSubmit={handleSubmit} onChange={onChangeHandler} value={query} />
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
