import {MOVIES_API_URL} from './constants';

class MoviesApi {
  constructor({baseUrl, token}) {
      this._address = baseUrl;
      this._token = token;
  }

  getMovies() {
    return fetch(this._address, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}: ${res.message}`);
}
}

const moviesApi = new MoviesApi({
  baseUrl: MOVIES_API_URL,
});

export default moviesApi;
