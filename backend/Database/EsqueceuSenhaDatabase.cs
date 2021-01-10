using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class EsqueceuSenhaDatabase
    {
        Models.lndbContext ctx = new Models.lndbContext();
        public Models.TbUsuario ProcurarConta(string email)
        {
           Models.TbUsuario usuario = ctx.TbUsuario.FirstOrDefault(x => x.DsEmail == email);
           return usuario;
        }

        public void AlterarSenha(string senha, int idUsuario)
        {
            Models.TbUsuario usuario = ctx.TbUsuario.FirstOrDefault(x => x.IdUsuario == idUsuario);

            usuario.DsSenha = senha;

            ctx.SaveChanges();
        }
    }
}