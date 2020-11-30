using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastroUsuario : ControllerBase
    {
        Business.CadastroUsuarioBusiness business = new Business.CadastroUsuarioBusiness();
        Utils.CadastroUsuarioConversor conversor = new Utils.CadastroUsuarioConversor();


        [HttpPost]
        public ActionResult<Models.Response.LogadoResponse> CadastrarUsuario (Models.Request.CadastroRequest cadastroRequest)
        {
            try
            {
                business.VerSeSenhasSaoIguais(cadastroRequest);

                Models.TbUsuario tbUsuario = conversor.ParaTbUsario(cadastroRequest);

                tbUsuario = business.CadastrarUsuario(tbUsuario);

                Models.Response.LogadoResponse logadoResponse = conversor.ParaLogadoResponse(tbUsuario);

                return logadoResponse;
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }

        }
        
    }
}