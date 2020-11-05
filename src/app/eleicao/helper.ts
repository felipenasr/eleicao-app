import { trump, biden} from './constantes'

export const calculaRestante = (total, apuradas) => (Math.ceil((total*100)/apuradas) - total);

export const dataFormater = (estados, data)=> {
  let dadosEleitorias: Array<DadosEleitorias> = [];
  Object.keys(estados).forEach(el => {
    let results = montaResult(data[el][0].summary.results, el)

    let estado = new DadosEleitorias(
                        estados[el],
                        results.resultados,
                        results.totalCount,
                        data[el][0].summary.eevp,
                        el)

    dadosEleitorias.push(estado);
  })
  return dadosEleitorias;
}

const montaResult = (result, chave)=> {
  let totalCount = 0
  let resultados: Array<Results> = [];
  result.forEach(el => {
    let obj: Results;
    if(trump[chave] === el.candidateID) {
      obj = new Results('Trump', el.voteCount, el.votePct);
    } else if(biden[chave] === el.candidateID) {
      obj = new Results('Biden', el.voteCount, el.votePct);
    }
    totalCount = totalCount +el.voteCount;
    if(obj && obj.name){
      resultados.push(obj);
    }
  });

  return {totalCount, resultados}
}


export class Results{
  constructor(
    public name: string,
    public votos: number,
    public perc: number
  ) {}
}

export class DadosEleitorias {
  restantesEstimados;
  constructor(
    public nomeEstado: string,
    public results: Array<Results>,
    public total: number,
    public apuradas: number,
    public sigla: string
  ) {
    this.restantesEstimados = calculaRestante(total, apuradas)
  }
}
