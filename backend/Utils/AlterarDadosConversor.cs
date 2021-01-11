using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Utils
{
    public class AlterarDadosConversor
    {
        public Models.TbUsuario ParaTbUsuario(Models.Request.AlteracaoDados request)
        {
            Models.TbUsuario usuario = new Models.TbUsuario();

            usuario.DsEmail = request.Email;
            usuario.NmUsuario = request.NomeUsuario;

            return usuario;
        }
    }
}