using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class LoginUsuarioDatabase
    {
        Models.lndbContext ctx = new Models.lndbContext();
        
        public Models.TbUsuario Logar (Models.Request.LoginRequest loginRequest)
        {
            Models.TbUsuario usuario = ctx.TbUsuario.FirstOrDefault(x => x.DsEmail 
                                     == loginRequest.Email && x.DsSenha
                                     == loginRequest.Senha);

            return usuario;                                        
        }
    }
}