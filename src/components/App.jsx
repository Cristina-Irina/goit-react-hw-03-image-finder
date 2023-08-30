import React, { Component } from 'react';
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

export class App extends Component {
  state = {
    images: [],
    searchText: '',
    page: 1,
    total: 1,
    isModalOpen: false,
    largeImageURL: '',
    imageTags: '',
    loading: false,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchText, page } = this.state;

    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.fetchImages();
    }
  }

  handleSubmit = searchValue => {
    this.setState({
      searchText: searchValue,
      images: [],
      page: 1,
    });
  };

  fetchImages = async () => {
    const { searchText, page } = this.state;
    try {
      this.setState({ loading: true, error: null });
      const fetchedImages = await fetchImages(searchText, page);

      this.setState(prevState => ({
        images: [...prevState.images, ...fetchedImages.hits],
        total: fetchedImages.total,
      }));
    } catch (error) {
      this.setState({
        error: `An error occurred: ${error.message}`,
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = (largeImageURL, tags) => {
    this.setState(({ isModalOpen }) => {
      if (!this.state.isModalOpen) {
        return {
          isModalOpen: !isModalOpen,
          largeImageURL: largeImageURL,
          imageTags: tags,
        };
      }
      return {
        isModalOpen: !isModalOpen,
        largeImageURL: '',
        imageTags: '',
      };
    });
  };

  render() {
    const {
      searchText,
      loading,
      images,
      error,
      total,
      page,
      isModalOpen,
      largeImageURL,
      imageTags,
    } = this.state;

    return (
      <Layout>
        <Header>
          <Searchbar onSubmit={this.handleSubmit} />
        </Header>
        <Section>
          <ImageGallery>
            <ImageGalleryItem images={images} toggleModal={this.toggleModal} />
          </ImageGallery>
          {error && <h2>{error}</h2>}

          {total === 0 && (
            <h2 style={{ textAlign: 'center' }}>
              Sorry, there are no images matching your request "{searchText}"
              ...
            </h2>
          )}

          {total / 12 > page && !loading && (
            <Button text="Load more" onClick={this.onLoadMore} />
          )}
        </Section>
        {loading && <Loader />}

        {isModalOpen && (
          <Modal
            imageURL={largeImageURL}
            imageTags={imageTags}
            toggleModal={this.toggleModal}
          />
        )}
        <GlobalStyle />
      </Layout>
    );
  }
}
