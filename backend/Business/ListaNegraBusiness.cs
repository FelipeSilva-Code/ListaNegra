using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace backend.Business
{
    public class ListaNegraBusiness
    {
        Database.ListaNegraDatabase db = new Database.ListaNegraDatabase();

        public Models.TbListaNegra Inserir(Models.TbListaNegra tbLista)
        {
            if(tbLista.NmPesso == string.Empty)
               throw new ArgumentException("O nome é obrigatório");

            if(tbLista.DsMotivo == string.Empty)
               throw new ArgumentException("O motivo é obrigatório");  

             return db.Inserir(tbLista);

        }

        public List<Models.TbListaNegra> Listar()
        {
           return db.Listar();
        }
    }
}