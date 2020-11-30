using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace backend.Utils
{
    public class CadastroUsuarioConversor
    {

        public Models.TbUsuario ParaTbUsario (Models.Request.CadastroRequest cadastroRequest)
        {
            Models.TbUsuario tbUsuario = new Models.TbUsuario();

            tbUsuario.DsEmail = cadastroRequest.Email;
            tbUsuario.DsSenha = cadastroRequest.Senha1;
            tbUsuario.NmUsuario = cadastroRequest.NomeUsuario;

            return tbUsuario;
        }

        public Models.Response.LogadoResponse ParaLogadoResponse (Models.TbUsuario tbUsuario)
        {
            Models.Response.LogadoResponse logadoResponse = new Models.Response.LogadoResponse();

            logadoResponse.IdUsuario = tbUsuario.IdUsuario;
            logadoResponse.NomeUsuario = tbUsuario.NmUsuario;

            return logadoResponse;
        }
        
    }
}