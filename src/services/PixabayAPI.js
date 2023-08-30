import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;

const API_KEY = `38126529-286095ed673191a38ee515f21`;

const IMAGE_ON_PAGE = 12;

export const fetchImages = async (queryText, page) => {
  const queryParams = {
    params: {
      key: API_KEY,
      q: queryText,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: IMAGE_ON_PAGE,
    },
  };

  try {
    const response = await axios.get(BASE_URL, queryParams);
    const imageData = await response.data;
    return imageData;
  } catch (error) {
    throw new Error(error);
  }
};
