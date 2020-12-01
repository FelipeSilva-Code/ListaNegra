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
            if(string.IsNullOrEmpty(tbLista.NmPessoa))
               throw new ArgumentException("O nome é obrigatório!");

            if(string.IsNullOrEmpty(tbLista.DsMotivo))
               throw new ArgumentException("O motivo é obrigatório!");
            
            if (tbLista.DtInclusao == null)
                throw new ArgumentException("A data de inclusão é obrigatória!");

            if (string.IsNullOrEmpty(tbLista.DsLocal))
                throw new ArgumentException("O local é obrigatório!");

            if (tbLista.IdUsuario == 0)
                throw new ArgumentException("Algo errado, tente novamente");   

            return db.Inserir(tbLista);

        }

        public List<Models.TbListaNegra> Listar(int IdUsuario)
        {
            if(IdUsuario == 0)
                throw new ArgumentException("Algo errado, tente novamente");
           
            return db.Listar(IdUsuario);
        }

        public void DeletarPessoa(int id)
        {
           db.DeletarPessoa(id);
        }

        public void Alterar(int id, Models.TbListaNegra tbLista)
        {
            if (tbLista.NmPessoa == string.Empty)
                throw new ArgumentException("O nome é obrigatório!");

            if (tbLista.DsMotivo == string.Empty)
                throw new ArgumentException("O motivo é obrigatório!");
            if (tbLista.DtInclusao == null)
                throw new ArgumentException("A data de inclusão é obrigatório!");

            if (tbLista.DsLocal == string.Empty)
                throw new ArgumentException("O local é obrigatório!");

            db.Alterar(id, tbLista);
        }
    }
}