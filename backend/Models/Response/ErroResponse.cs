using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace backend.Models.Response
{
    public class ErroResponse
    {
        public int Codigo { get; set; }
        public string Erro { get; set; }

        public ErroResponse(int cdg, string erro)
        {
            this.Codigo = cdg;
            this.Erro = erro;
        }
    }
}