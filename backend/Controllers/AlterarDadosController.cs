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
    public class AlterarDadosController : ControllerBase
    {

        Utils.AlterarDadosConversor conversor = new Utils.AlterarDadosConversor();
        Utils.CadastroeLoginUsuarioConversor conversorTrocaDados = new Utils.CadastroeLoginUsuarioConversor();
        Business.AlterarDadosBusiness business = new Business.AlterarDadosBusiness();
        Business.CadastroUsuarioBusiness cadastroBusiness = new Business.CadastroUsuarioBusiness();
        Business.EsqueceuSenhaBusiness esqueceuSenhaBusiness = new Business.EsqueceuSenhaBusiness();
        
        [HttpPut("alterarDados")]
        public ActionResult<Models.Response.LogadoResponse> AlterarDados(Models.Request.AlteracaoDados request)
        {
            try
            {
                int idUsuario = request.IdUsuario;

                Models.TbUsuario usuario = conversor.ParaTbUsuario(request);

                usuario = business.AlterarDados(idUsuario, usuario);

                Models.Response.LogadoResponse logadoResponse = conversorTrocaDados.ParaLogadoResponse(usuario);

                return logadoResponse;
            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }
        }   

        [HttpPut("alterarSenha/{idUsuario}")]
        public ActionResult<string> AlterarSenha (Models.Request.AlterarSenha alterarSenha, int idUsuario)
        {
            try
            {
                string senhaAtual = business.VerSeSenhaAtualEstaCorreta(alterarSenha.SenhaAtual, idUsuario);

                cadastroBusiness.VerSeSenhasSaoIguais(alterarSenha.Senha1, alterarSenha.Senha2);

                if(senhaAtual == alterarSenha.Senha1)
                    throw new ArgumentException("A nova senha não pode ser igual a senha antiga.");
                
                esqueceuSenhaBusiness.AlterarSenha(alterarSenha.Senha1, idUsuario);

                return "Senha alterada.";
            }
            catch (System.Exception ex)
            {
                return BadRequest( new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }
        }
    }
}