using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Models.Response
{
    public class InformacoesDaContaResponse
    {
        public int IdUsuario {get; set;}
        public string Nome {get; set;}
        public string Email {get; set;}        
    }
}