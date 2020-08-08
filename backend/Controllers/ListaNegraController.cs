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
       Business.ListaNegraBusiness business = new Business.ListaNegraBusiness();

        [HttpPost]
       public ActionResult<Models.Response.ListaNegraResponse> Inserir (Models.Request.ListaNegraRequest request)
       {
            try
            {
                Models.TbListaNegra tbLista = conversor.ConversorParaModeloTabela(request);

                business.Inserir(tbLista);

                Models.Response.ListaNegraResponse resp = conversor.ConversorParaModeloResponse(tbLista);

                return resp;


            }
            catch (System.Exception ex)
            {
                return BadRequest( 
                    new Models.Response.ErroResponse(400, ex.Message)
                );
            }  
       }

        [HttpGet]
        public ActionResult<List<Models.Response.ListaNegraResponse>> Listar()
        {
            try
            {
                List<Models.TbListaNegra> tbLista = business.Listar();
               
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
    }
}