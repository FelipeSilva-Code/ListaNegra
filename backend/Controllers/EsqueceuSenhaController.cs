using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using BackEnd.Business;
using Microsoft.Extensions.Logging;


namespace backend.Controllers
{
    public class EsqueceuSenhaController : ControllerBase
    {
        Business.EsqueceuSenhaBusiness business = new Business.EsqueceuSenhaBusiness();
        Business.CadastroUsuarioBusiness cadastroBusiness = new Business.CadastroUsuarioBusiness();
        Utils.EsqueceuSenhaConversor conversor = new Utils.EsqueceuSenhaConversor();

        private readonly ILogger<EsqueceuSenhaController> _logger;
        private readonly IMailer _mailer;

        public EsqueceuSenhaController(ILogger<EsqueceuSenhaController> logger, IMailer mailer)
        {
            _logger = logger;
            _mailer = mailer;
        }
        
        [HttpGet]
        public ActionResult<Models.Response.InformacoesDaContaResponse> ProcurarConta (string email) {
            try
            {
                Models.TbUsuario usuario = business.ProcurarConta(email);
                Models.Response.InformacoesDaContaResponse infoContaResponse = conversor.paraInfoConta(usuario);
                return infoContaResponse;
            }
            catch (System.Exception ex)
            {
                return BadRequest( new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }
        }

        [HttpPost]
        public async Task<ActionResult<string>> EnviarCodigo (string email) {
            try
            {
                string codigo = business.GerarCodigo();

                string corpo = $"O código para a redefinição da senha é: {codigo}"; 

                await _mailer.EnviarEmailAsync(email, "Codigo Para Alterar Senha", corpo);

                return codigo;

            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }
        }

        [HttpPut("{idUsuario}")]
        public ActionResult<string> AlterarSenha (Models.Request.NovaSenhaRequest novaSenhaRequest, int idUsuario) {
            try
            {
                cadastroBusiness.VerSeSenhasSaoIguais(novaSenhaRequest.Senha1, novaSenhaRequest.Senha2);
                
                business.AlterarSenha(novaSenhaRequest.Senha1, idUsuario);

                return "Senha alterada";
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