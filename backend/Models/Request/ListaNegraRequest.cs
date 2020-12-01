using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace backend.Models.Request
{
    public class ListaNegraRequest
    {
        public int IdUsuario {get; set;}
        public string Nome { get; set; }
        public string Motivo { get; set; }
        public DateTime Inclusao {get; set;}
        public string Local {get; set;}
        public IFormFile Foto {get; set;}
    }
}