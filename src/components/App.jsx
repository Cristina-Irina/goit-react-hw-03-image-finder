import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from 'services/PixabayAPI';
import { Layout } from './Layout/Layout';
import { Header } from './Header/Header';
import { Section } from './Section/Section';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

function App() {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [imageTags, setImageTags] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedImages = await fetchImages(searchText, page);

        setImages(prevImages => [...prevImages, ...fetchedImages.hits]);
        setTotal(fetchedImages.total);
      } catch (error) {
        setError(`An error occurred: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (searchText !== '' || page !== 1) {
      fetchImagesData();
    }
  }, [searchText, page]);

  const handleSubmit = searchValue => {
    setSearchText(searchValue);
    setImages([]);
    setPage(1);
  };

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const toggleModal = (largeImageURL, tags) => {
    if (!isModalOpen) {
      setIsModalOpen(true);
      setLargeImageURL(largeImageURL);
      setImageTags(tags);
    } else {
      setIsModalOpen(false);
      setLargeImageURL('');
      setImageTags('');
    }
  };

  return (
    <Layout>
      <Header>
        <Searchbar onSubmit={handleSubmit} />
      </Header>
      <Section>
        <ImageGallery>
          <ImageGalleryItem images={images} toggleModal={toggleModal} />
        </ImageGallery>
        {error && <h2>{error}</h2>}

        {total === 0 && (
          <h2 style={{ textAlign: 'center' }}>
            Sorry, there are no images matching your request "{searchText}"...
          </h2>
        )}

        {total / 12 > page && !loading && (
          <Button text="Load more" onClick={onLoadMore} />
        )}
      </Section>
      {loading && <Loader />}

      {isModalOpen && (
        <Modal
          imageURL={largeImageURL}
          imageTags={imageTags}
          toggleModal={toggleModal}
        />
      )}
      <GlobalStyle />
    </Layout>
  );
}

export default App;
