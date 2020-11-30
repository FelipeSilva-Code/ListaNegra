using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    [Table("tb_lista_negra")]
    public partial class TbListaNegra
    {
        [Key]
        [Column("id_lista_negra")]
        public int IdListaNegra { get; set; }
        [Column("id_usuario")]
        public int? IdUsuario { get; set; }
        [Column("nm_pessoa", TypeName = "varchar(100)")]
        public string NmPessoa { get; set; }
        [Column("ds_motivo", TypeName = "varchar(100)")]
        public string DsMotivo { get; set; }
        [Column("dt_inclusao", TypeName = "datetime")]
        public DateTime? DtInclusao { get; set; }
        [Column("ds_local", TypeName = "varchar(50)")]
        public string DsLocal { get; set; }
        [Column("ds_foto", TypeName = "varchar(50)")]
        public string DsFoto { get; set; }

        [ForeignKey(nameof(IdUsuario))]
        [InverseProperty(nameof(TbUsuario.TbListaNegra))]
        public virtual TbUsuario IdUsuarioNavigation { get; set; }
    }
}
