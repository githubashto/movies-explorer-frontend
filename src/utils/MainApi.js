import {API_URL} from './constants';

class MainApi {
  constructor({baseUrl, token}) {
      this._address = baseUrl;
      this._token = token;
  }

  getMovies() {
    return fetch(`${this._address}/movies`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(this._checkResponse);
  }

  postMovie(data) {
    return fetch(`${this._address}/movies`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResponse);
  }

  deleteMovie(movieId) {
    return fetch(`${this._address}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
      },
    })
    .then(this._checkResponse);
  }

  getMe() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
    })
    .then(this._checkResponse);
  }

  patchMe(data) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResponse);
  }

  signUp(data) {
    return fetch(`${this._address}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
})
    .then(this._checkResponse);
}

  signIn(data) {
    return fetch(`${this._address}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(this._checkResponse)
    .then(data => {
      if (data.token){
        return data;
      }
    })
  }

 _checkResponse(res) {
  if (res.ok) {
      return res.json();
  }
  return res.json()
    .then((body) => {
      throw new Error(body.message);
    })
}
}

const mainApi = new MainApi({
  baseUrl: API_URL,
  token: `Bearer ${localStorage.getItem('jwt')}`
});

export default mainApi;
