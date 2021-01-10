using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace backend.Business
{
    public class EsqueceuSenhaBusiness
    {
        CadastroUsuarioBusiness cadastroBusiness = new CadastroUsuarioBusiness();
        Database.EsqueceuSenhaDatabase database = new Database.EsqueceuSenhaDatabase();
        public Models.TbUsuario ProcurarConta(string email)
        {
            cadastroBusiness.ValidarEmail(email);

            Models.TbUsuario usuario = database.ProcurarConta(email);

            if(usuario == null)
                throw new ArgumentException("Nenhum registro encontrado");

            return usuario;    
        }

        public string GerarCodigo () 
        {

            Random random = new Random();
            string codigo = string.Empty;

            for(int i = 1; i < 5; i++)
            {
                int x = random.Next(0, 9);

                codigo += x;
            }

            return codigo;
        }

        public void AlterarSenha (string senha, int idUsuario) 
        {
            if(string.IsNullOrEmpty(senha))
                throw new ArgumentException("A nova senha é obrigatória");

            cadastroBusiness.ValidarSenha(senha);

            database.AlterarSenha(senha, idUsuario);
        }
    }
}