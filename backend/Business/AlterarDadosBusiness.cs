using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class AlterarDadosBusiness
    {
        Database.AlterarDadosDatabase db = new Database.AlterarDadosDatabase();
        Business.CadastroUsuarioBusiness cadastroBusiness = new CadastroUsuarioBusiness();

        public Models.TbUsuario AlterarDados(int idUsuario, Models.TbUsuario usuario)
        {
            usuario = cadastroBusiness.TirarEspacosDosCampos(usuario);

            cadastroBusiness.ValidarEmail(usuario.DsEmail);

            cadastroBusiness.ValidarNome(usuario.NmUsuario);

            return db.AlterarDados(idUsuario, usuario);
        }     

        public string VerSeSenhaAtualEstaCorreta (string senhaPassada, int idUsuario)
        {
            string senhaAtual = db.PegarSenhaAtual(idUsuario);

            if(senhaAtual != senhaPassada)
                throw new ArgumentException("A senha atual está incorreta.");
            else
                return senhaAtual;    
        }   
    }
}