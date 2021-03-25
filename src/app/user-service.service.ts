import axios from "axios";


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  addUser = (user) =>
  {
      return new Promise((resolve, reject) =>
      {
          axios.post('http://localhost:5000/login', user, {
              headers:
                  {
                      "Content-Type": "multipart/form-data"
                  }
          })
              .then(response =>
              {
                  if ( response.status === 200 )
                  {
                      resolve(response.data);
                  }
                  else
                  {
                      reject(response.data);
                  }
              })
              .catch(error =>
              {
                  reject(error.response.data);
              });
      });
  };
  constructor() { }
}
