using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Business
{
    public class CadastroUsuarioBusiness
    {
        Database.CadastroUsuarioDatabase dbCadastro = new Database.CadastroUsuarioDatabase();
        public void VerSeSenhasSaoIguais(Models.Request.CadastroRequest cadastroRequest)
        {
            if(cadastroRequest.Senha1 != cadastroRequest.Senha2)
                throw new ArgumentException("As senhas são diferentes.");

        }

        public Models.TbUsuario TirarEspacosDosCampos (Models.TbUsuario tbUsuario)
        {
            tbUsuario.DsEmail = tbUsuario.DsEmail.Trim();
            tbUsuario.DsSenha = tbUsuario.DsSenha.Trim();
            tbUsuario.NmUsuario = tbUsuario.NmUsuario.Trim();
            
            return tbUsuario;
        }

        public void ValidarEmail (string email)
        {
            if (!email.Contains("@gmail.com") && !email.Contains("@hotmail.com") && !email.Contains("@bol.com"))
                throw new ArgumentException("O e-mail está incorreto.");

            if(String.IsNullOrEmpty(email))
                throw new ArgumentException("O e-mail é obrigatório");   

            if(!dbCadastro.VerSeEmailJaEstaCadastrado(email))
                throw new ArgumentException("Esse e-mail já foi cadastrado.");     
        }

        public void ValidarSenha (string senha)
        {
            if(senha.Length < 8)
                throw new ArgumentException("A senha deve conter no minímo 8 caracteres.");
        }

        public void ValidarNome (string nome)
        {
            if(string.IsNullOrEmpty(nome))
                throw new ArgumentException("O nome é obrigatório");

            if(!nome.Contains(" "))
                throw new ArgumentException("O sobrenome é obrigatório");
        }

        public Models.TbUsuario CadastrarUsuario (Models.TbUsuario tbUsuario)
        {

            tbUsuario = this.TirarEspacosDosCampos(tbUsuario);
            
            this.ValidarEmail(tbUsuario.DsEmail);

            this.ValidarSenha(tbUsuario.DsSenha);

            this.ValidarNome(tbUsuario.NmUsuario);

            return dbCadastro.CadastrarUsuario(tbUsuario);
        }
    }
}