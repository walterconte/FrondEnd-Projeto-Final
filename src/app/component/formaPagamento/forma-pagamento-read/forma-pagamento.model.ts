export interface FormaPagamento{
    fpgId?: number
    fpgDescricao: string
    fpgTipo: string
    fpgTaxa: number | null
    fpgParcelamento: string
}