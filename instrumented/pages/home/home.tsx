import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import { RootState } from '../../store';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Loading } from '../../components/Loading';
import { Modal } from '../../components/Modal';
import { useSelector } from 'react-redux';
import { DataPlant } from 'types/types';
import { useGetPlantsQuery } from '../../store/plantsApi';

export const Home = () => {
  const [openedId, setOpenedId] = useState<number | null>(null);
  const [openedImg, setOpenedImg] = useState<string | null>(null);
  const [openedCommon, setOpenedCommon] = useState<string | null>(null);
  const [openedLatin, setOpenedlatin] = useState<string | null>(null);
  const [openedWatering, setOpenedWatering] = useState<string | null>(null);
  const [openedFamily, setOpenedFamily] = useState<string | null>(null);
  const [openedWatches, setOpenedWatches] = useState<number | null>(null);
  const searchValue = useSelector((state: RootState) => state.cardsSearch.searchValue);
  const { data = [], isLoading, isError, isFetching } = useGetPlantsQuery(searchValue);
  if (isLoading) {
    return <Loading />;
  }
  const handleOpening = (basa: DataPlant) => {
    setOpenedId(basa.id);
    setOpenedImg(basa.img);
    setOpenedCommon(basa.common);
    setOpenedlatin(basa.latin);
    setOpenedWatering(basa.watering);
    setOpenedFamily(basa.family);
    setOpenedWatches(basa.watches);
  };
  const filteredData = data.filter(
    (el) =>
      el.common.toLocaleLowerCase().includes(searchValue.toLowerCase()) ||
      el.latin.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  );
  const handleClosing = () => {
    setOpenedId(null);
    setOpenedImg(null);
    setOpenedCommon(null);
    setOpenedlatin(null);
    setOpenedWatering(null);
    setOpenedFamily(null);
    setOpenedWatches(null);
  };
  return (
    <section id="home1" className="container_home1" data-testid="home">
      <SearchBar />
      {isFetching ? (
        <Loading />
      ) : (
        <ul className="container_home">
          {searchValue === ''
            ? data.map((card: DataPlant) => {
                return (
                  <Card
                    key={card.id}
                    id={card.id}
                    img={card.img}
                    common={card.common}
                    latin={card.latin}
                    watering={card.watering}
                    family={card.family}
                    onOpening={handleOpening}
                    watches={card.watches}
                  />
                );
              })
            : filteredData.map((card: DataPlant) => {
                return (
                  <Card
                    key={card.id}
                    id={card.id}
                    img={card.img}
                    common={card.common}
                    latin={card.latin}
                    watering={card.watering}
                    family={card.family}
                    onOpening={handleOpening}
                    watches={card.watches}
                  />
                );
              })}
          {isLoading && <Loading />}
          {filteredData.length === 0 && <p>Not found</p>}
          {isError && <p className="error">Something went wrong</p>}
          {openedId !== null && (
            <Modal
              id={openedId}
              img={openedImg ? openedImg : '-'}
              onClose={handleClosing}
              common={openedCommon ? openedCommon : '-'}
              latin={openedLatin ? openedLatin : '-'}
              watering={openedWatering ? openedWatering : '-'}
              family={openedFamily ? openedFamily : '-'}
              watches={openedWatches ? openedWatches : 0}
            />
          )}
        </ul>
      )}
    </section>
  );
};
