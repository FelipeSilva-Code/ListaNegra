using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Utils
{
    public class ListaNegraConversor
    {
        public Models.TbListaNegra ConversorParaModeloTabela (Models.Request.ListaNegraRequest req)
        {
            Models.TbListaNegra listaNegra = new Models.TbListaNegra();
            listaNegra.NmPesso = req.Nome;
            listaNegra.DsMotivo = req.Motivo;
            listaNegra.DtInclusao = DateTime.Now;
            return listaNegra;
        }

        public Models.Response.ListaNegraResponse ConversorParaModeloResponse (Models.TbListaNegra tbLista)
        {
            Models.Response.ListaNegraResponse resp = new Models.Response.ListaNegraResponse();
            resp.ID = tbLista.IdListaNegra;
            resp.Inclusao = tbLista.DtInclusao;
            resp.Motivo = tbLista.DsMotivo;
            resp.Nome = tbLista.NmPesso;
            return resp;
        }

        public List<Models.Response.ListaNegraResponse> ParaModeloListaResponse (List<Models.TbListaNegra> tbLista)
        {
            List<Models.Response.ListaNegraResponse> resp = new List<Models.Response.ListaNegraResponse>();
            foreach(Models.TbListaNegra item in tbLista)
            {
               resp.Add(this.ConversorParaModeloResponse(item));
            }
            return resp;
        
        }

        public Models.TbListaNegra ConversorParaModeloTabelaExcluir(Models.Response.ListaNegraResponse resp)
        {
            Models.TbListaNegra tbLista = new Models.TbListaNegra();
            tbLista.IdListaNegra = resp.ID;
            tbLista.DtInclusao = resp.Inclusao;
            tbLista.DsMotivo = resp.Motivo;
            tbLista.NmPesso = resp.Nome;
            return tbLista;
        }
    }
}