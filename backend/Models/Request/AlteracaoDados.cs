using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


namespace backend.Models.Request
{
    public class AlteracaoDados
    {
        public int IdUsuario { get; set; }
        public string NomeUsuario { get; set; }
        public string Email { get; set; }
    }
}