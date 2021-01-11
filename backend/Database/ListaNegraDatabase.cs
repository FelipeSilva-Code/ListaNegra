using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace backend.Database
{
    public class ListaNegraDatabase
    {
        Models.lndbContext ctx = new Models.lndbContext();
        public Models.TbListaNegra Inserir(Models.TbListaNegra tbLista)
        {
               ctx.Add(tbLista);
               ctx.SaveChanges();
               return tbLista;
        }
       
        public List<Models.TbListaNegra> Listar (int IdUsuario)
        {
                List<Models.TbListaNegra> lista = ctx.TbListaNegra.Where(x => x.IdUsuario == IdUsuario)
                                                                  .ToList();
                return lista;
        }

        public void DeletarPessoa(int id)
        {
           Models.TbListaNegra listaNegra = ctx.TbListaNegra.FirstOrDefault(x => x.IdListaNegra == id);
           ctx.Remove(listaNegra);
           ctx.SaveChanges();

        }

        public void Alterar(int id, Models.TbListaNegra req)
        {
            Models.TbListaNegra listaNegra = ctx.TbListaNegra.FirstOrDefault(x => x.IdListaNegra == id);
            listaNegra.NmPessoa = req.NmPessoa;
            listaNegra.DtInclusao = req.DtInclusao;
            listaNegra.DsMotivo = req.DsMotivo;
            listaNegra.DsLocal = req.DsLocal;
            listaNegra.DsFoto = req.DsFoto;
            ctx.SaveChanges();
        }


    }
}