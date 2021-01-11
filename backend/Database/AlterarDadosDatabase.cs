using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class AlterarDadosDatabase
    {
        Models.lndbContext ctx = new Models.lndbContext();

        public Models.TbUsuario AlterarDados(int idUsuario, Models.TbUsuario usuario)
        {
            Models.TbUsuario tbUsuario = ctx.TbUsuario.FirstOrDefault(x => x.IdUsuario == idUsuario);

            tbUsuario.DsEmail = usuario.DsEmail;
            tbUsuario.NmUsuario = usuario.NmUsuario;

            ctx.SaveChanges();

            return tbUsuario;
        }

        public string PegarSenhaAtual (int idUsuario)
        {
            Models.TbUsuario usuario = ctx.TbUsuario.FirstOrDefault(x => x.IdUsuario == idUsuario);

            return usuario.DsSenha;
        }
    }
}