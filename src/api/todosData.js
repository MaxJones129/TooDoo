import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getTodos = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/todos.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleToDo = (firebaseKey) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/todos/${firebaseKey}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const toggleDone = (firebaseKey, isDone) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/todos/${firebaseKey}.json`, {
      // Ensure `.json` is in URL
      method: 'PATCH', // PATCH instead of PUT to update only the isDone field
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone: !isDone }),
    })
      .then((response) => response.json())
      .then(resolve)
      .catch(reject);
  });

export { getTodos, getSingleToDo, toggleDone };
