import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default class ListaNegraApi{

   async cadastrar(ln) {
        const resp = await api.post('/listanegra', ln);
        return resp; 
   }

   async consultar(){
       const resp = await api.get('/listanegra');
       return resp.data;
   }

   async deletar(id){
     await api.delete('/listanegra', id);
   }



}