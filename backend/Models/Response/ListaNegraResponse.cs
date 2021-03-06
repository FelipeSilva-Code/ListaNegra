using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace backend.Models.Response
{
    public class ListaNegraResponse
    {
        public int ID { get; set; }
        public int? IdUsuario {get; set;}
        public string Nome { get; set; }
        public string Motivo { get; set; }
        public DateTime? Inclusao { get; set; }
        public string Local {get; set;}
        public string Foto { get; set; }
    }
}