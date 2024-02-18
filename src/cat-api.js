import axios from 'axios';

export const fetchBreeds = () => {
  axios.defaults.headers.common['x-api-key'] =
    'live_cQ1OwFpkQuDfGOPoa6MPohCp5lBJ71zS947UIbPLphd0vwLOltOgKI4VFQhdpgcD';

  return axios.get(`https://api.thecatapi.com/v1/breeds`).then(res => res.data);
};

export const fetchCatByBreed = breedId => {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(res => res.data);
};
