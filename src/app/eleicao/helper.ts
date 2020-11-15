import { trump, biden} from './constantes'

export const calculaRestante = (total, apuradas) => (Math.ceil((total*100)/apuradas) - total);

export const dataFormater = (data)=> {
  let a = []

  data.forEach(el => {
    a.push({
      candidato: el.nm,
      vice: el.nv,
      porcentagem: el.pvap,
      abs: parseInt(el.vap),
      posicao: parseInt(el.seq)
    })
  });

  return a;
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
