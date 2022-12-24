import {useState} from "react";
import axios from 'axios';

const useLocalApi = async (url) => {
    let resp = {};

    await axios.get(`http://localhost:4000${url}`)
    .then((response) => {
      if(response.status === 200){
        resp =  {status: 'OK', data: response.data};
        return resp;
      }
    })
    .catch(function (error) {
      resp = {status: 'BAD', data: error};
    }) 

    
  }

  export default useLocalApi;