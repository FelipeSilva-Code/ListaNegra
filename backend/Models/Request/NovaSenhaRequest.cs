using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Models.Request
{
    public class NovaSenhaRequest
    {
        public string Senha1 {get; set;}
        public string Senha2 {get; set;}
    }
}