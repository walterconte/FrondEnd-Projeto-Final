export interface Product{ // Exportando a interface Product
    proId?: number
    proNome: string
    proPrecoCusto: number | null
    proPrecoVenda: number | null
    proDescricao: string
    proQuantidadeEstoque: number | null
    proStatus: string
    proCategoria: string
    proCodigoBarras: string 
    proMarca: string 
    proDataCadastro: Date
    proDataAtualizacao: Date
}