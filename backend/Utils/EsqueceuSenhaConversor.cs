using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace backend.Utils
{
    public class EsqueceuSenhaConversor
    {
        public Models.Response.InformacoesDaContaResponse paraInfoConta (Models.TbUsuario usuario)
        {
            Models.Response.InformacoesDaContaResponse infoContaResponse = new Models.Response.InformacoesDaContaResponse();

            infoContaResponse.Email = usuario.DsEmail;
            infoContaResponse.IdUsuario = usuario.IdUsuario;
            infoContaResponse.Nome = usuario.NmUsuario;

            return infoContaResponse;
        }
    }
}