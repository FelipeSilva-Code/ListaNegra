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

    public class ListaNegraController : ControllerBase
    {

        Utils.ListaNegraConversor conversor = new Utils.ListaNegraConversor();
        Utils.CadastroeLoginUsuarioConversor conversorTrocaDados = new Utils.CadastroeLoginUsuarioConversor();
        Business.ListaNegraBusiness business = new Business.ListaNegraBusiness();
        Business.GerenciadorFoto gerenciadorFoto = new Business.GerenciadorFoto();

        [HttpPost]
        public ActionResult<Models.Response.ListaNegraResponse> Inserir([FromForm]Models.Request.ListaNegraRequest request)
        {
            try
            {
                Models.TbListaNegra tbLista = conversor.ConversorParaModeloTabela(request);
                if(request.Foto == null)
                     tbLista.DsFoto = "user.png";
                
                else
                     tbLista.DsFoto = gerenciadorFoto.GerarNovoNome(request.Foto.FileName);
                
                business.Inserir(tbLista);

                if(request.Foto != null)
                  gerenciadorFoto.SalvarFoto(tbLista.DsFoto, request.Foto);
                

                Models.Response.ListaNegraResponse resp = conversor.ConversorParaModeloResponse(tbLista);

                return resp;


            }
            catch (System.Exception ex)
            {
                return BadRequest(new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }
        }

        [HttpPut("{id}")]
        public ActionResult<Models.TbListaNegra> Alterar(int id, [FromForm] Models.Request.ListaNegraRequest req)
        {
            try
            {
                Models.TbListaNegra lista = conversor.ConversorParaModeloTabela(req);

                if( req.Foto != null )
                {
                    lista.DsFoto = gerenciadorFoto.GerarNovoNome(req.Foto.FileName);
                    gerenciadorFoto.SalvarFoto(lista.DsFoto, req.Foto);
                }
               
                business.Alterar(id, lista);
                return lista;

            }
            catch (System.Exception ex)
            {

                return BadRequest(new Models.Response.ErroResponse(
                    400, ex.Message
                ));
            }
        }

        [HttpGet("foto/{nome}")]
        public ActionResult BuscarFoto(string nome)
        {
            try
            {
                byte[] foto = gerenciadorFoto.LerFoto(nome);
                string contentType = gerenciadorFoto.GerarContentType(nome);
                return File(foto, contentType);
            }
            catch (System.Exception ex)
            {
                return BadRequest(
                    new Models.Response.ErroResponse(404, ex.Message)
                );
            }
        }

        [HttpGet("{idUsuario}")]
        public ActionResult<List<Models.Response.ListaNegraResponse>> Listar(int idUsuario)
        {
            try
            {
                List<Models.TbListaNegra> tbLista = business.Listar(idUsuario);

                if (tbLista.Count == 0)
                    NotFound("Nenhuma pessoa na lista negra encontrada");

                List<Models.Response.ListaNegraResponse> resp = conversor.ParaModeloListaResponse(tbLista);
                return resp;
            }
            catch (System.Exception ex)
            {

                return BadRequest(new Models.Response.ErroResponse(
                    500, ex.Message
                ));
            }

        }

        
        [HttpDelete("{id}")]
        public ActionResult<string> DeletarPessoa(int id)
        {
            try
            {
                business.DeletarPessoa(id);
                return "Deletado com sucesso.";

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