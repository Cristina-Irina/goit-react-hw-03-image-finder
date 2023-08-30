import React, { Component } from 'react';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

const Notification = styled.div`
  background-color: #ff6b6b;
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 10px 15px;
  font-weight: bold;
`;

export class Searchbar extends Component {
  state = {
    searchValue: '',
    error: '',
  };

  onChangeInput = e => {
    const { value } = e.currentTarget;
    const validValue = value.trim().toLowerCase();
    this.setState({ searchValue: validValue });
  };

  onSearchImage = e => {
    e.preventDefault();
    const { searchValue } = this.state;

    if (!searchValue) {
      this.showError('Enter text for search.');
      return;
    }

    this.props.onSubmit(searchValue);
    this.setState({ searchValue: '', error: '' });
  };

  showError = errorMessage => {
    this.setState({ error: errorMessage }, () => {
      setTimeout(() => {
        this.setState({ error: '' });
      }, 2000);
    });
  };

  render() {
    const { searchValue, error } = this.state;
    return (
      <SearchForm onSubmit={this.onSearchImage}>
        <SearchButton type="submit">
          <BsSearch size="16" />
        </SearchButton>
        <SearchInput
          id="input"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={this.onChangeInput}
          placeholder="Search images and photos"
          value={searchValue}
        ></SearchInput>
        {error && <Notification>{error}</Notification>}
      </SearchForm>
    );
  }
}
