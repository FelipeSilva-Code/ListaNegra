using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Database
{
    public class CadastroUsuarioDatabase
    {
        Models.lndbContext ctx = new Models.lndbContext();

        public bool VerSeEmailJaEstaCadastrado (string email)
        {
            Models.TbUsuario usuario = ctx.TbUsuario.FirstOrDefault(x => x.DsEmail == email);
            bool x = usuario == null;

            return x;
        }
        
        public Models.TbUsuario CadastrarUsuario (Models.TbUsuario tbUsuario) 
        {
            ctx.TbUsuario.Add(tbUsuario);
            ctx.SaveChanges();

            return tbUsuario;
        }

        
    }
}