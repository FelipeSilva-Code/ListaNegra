using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class LoginUsuarioBusiness : ControllerBase
    {
        Database.LoginUsuarioDatabase dbLogin = new Database.LoginUsuarioDatabase();
        Utils.CadastroeLoginUsuarioConversor conversor = new Utils.CadastroeLoginUsuarioConversor();
        public Models.TbUsuario Logar (Models.Request.LoginRequest loginRequest)
        {

                if (string.IsNullOrEmpty(loginRequest.Email))
                    throw new ArgumentException("O e-mail é obrigatório.");

                if (string.IsNullOrEmpty(loginRequest.Senha))
                    throw new ArgumentException("A senha é obrigatória.");

                Models.TbUsuario usuario = dbLogin.Logar(loginRequest);

                if (usuario == null)
                    throw new ArgumentException("Nenhum registro encontrado!");

                return usuario;
            

        } 
        
    }
}