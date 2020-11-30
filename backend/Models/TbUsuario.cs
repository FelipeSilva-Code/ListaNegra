using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_usuario")]
    public partial class TbUsuario
    {
        public TbUsuario()
        {
            TbListaNegra = new HashSet<TbListaNegra>();
        }

        [Key]
        [Column("id_usuario")]
        public int IdUsuario { get; set; }
        [Column("nm_usuario", TypeName = "varchar(100)")]
        public string NmUsuario { get; set; }
        [Column("ds_email", TypeName = "varchar(100)")]
        public string DsEmail { get; set; }
        [Column("ds_senha", TypeName = "varchar(100)")]
        public string DsSenha { get; set; }

        [InverseProperty("IdUsuarioNavigation")]
        public virtual ICollection<TbListaNegra> TbListaNegra { get; set; }
    }
}
