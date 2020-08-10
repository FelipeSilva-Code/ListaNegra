using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace backend.Models.Request
{
    public class ListaNegraRequest
    {
        public string Nome { get; set; }
        public string Motivo { get; set; }
        public DateTime Inclusao {get; set;}
        public string Local {get; set;}
    }
}