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
    public class LoginUsuarioController : ControllerBase
    {
        Business.LoginUsuarioBusiness business = new Business.LoginUsuarioBusiness();
        Utils.CadastroeLoginUsuarioConversor conversor = new Utils.CadastroeLoginUsuarioConversor();

        [HttpPost]
        public ActionResult<Models.Response.LogadoResponse> Logar (Models.Request.LoginRequest loginRequest)
        {
            try
            {
               Models.TbUsuario usuario = business.Logar(loginRequest);

               Models.Response.LogadoResponse logadoResponse = conversor.ParaLogadoResponse(usuario);

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