import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export default class ListaNegraApi{

  async logar (request){
    const resp = api.post("/loginUsuario", request);
    return resp;
  }

  async inscreverNoSistema (request){
    const resp = api.post("/cadastroUsuario", request);
    return resp;
  }

  async cadastrar(ln) {
    console.log(ln);

    let formData = new FormData();
    formData.append('nome', ln.nome);
    formData.append('motivo', ln.motivo);
    formData.append('local', ln.local);
    formData.append('inclusao', ln.inclusao);
    formData.append('foto', ln.foto);
    
    const resp = await api.post('/listanegra', formData, {
      headers: { 'content-type': 'multipart/form-data' }
    });
    console.log(resp);
    return resp;
  }

  buscarImagem(foto) {
    const urlFoto = api.defaults.baseURL + '/listanegra/foto/' + foto;
    console.log(urlFoto);

    return urlFoto;
  }
 
   async consultar(){
       const resp = await api.get('/listanegra');
       return resp.data;
  
   }

   async deletar(id){
     await api.delete(`/listanegra/${id}` );
   }

   async alterar(id, ln){
       let formData = new FormData();
       formData.append("nome", ln.nome);
       formData.append("motivo", ln.motivo);
       formData.append("local", ln.local);
       formData.append("inclusao", ln.inclusao);
       formData.append("foto", ln.foto);

       const resp = await api.put(`/listanegra/${id}`, formData, {
         headers: { "content-type": "multipart/form-data" },
       });
       console.log(resp);

   }



}