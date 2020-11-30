using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;


namespace backend.Models.Request
{
    public class CadastroRequest
    {
        public string NomeUsuario { get; set; }
        public string Email { get; set; }
        public string Senha1 {get; set;}
        public string Senha2 {get; set;}
    }
}