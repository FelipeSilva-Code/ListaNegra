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
       
        public List<Models.TbListaNegra> Listar ()
        {
                List<Models.TbListaNegra> lista = ctx.TbListaNegra.ToList();
                return lista;
        }
    }
}