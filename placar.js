/* =====================================================================
   JOGA 2026 · PLACAR (classificação geral)
   ---------------------------------------------------------------------
   PARA ATUALIZAR: acrescente um resultado no fim da lista RESULTADOS
   e troque ATUALIZADO. A tabela, o card do líder, a lista de
   resultados e a barra fixa do líder são montados sozinhos a partir daqui.

   Tipos de resultado:
   - tabela: 'geral' -> colocação vale 20, 17, 15, 14, 13, 12 (Art. 22)
   - tabela: 'show'  -> Noite Cultural (Show de Talentos): 10, 6, 4, 3, 2, 1 (Manual, 7.1.3)
   - pontos: { verde: 10, azul: 10 }  -> pontos diretos (participação,
     doação de sangue, alimentos, cerimônia, W.O. = -5, limpeza = -2...)
   Equipes: azul, verde, amarela, branca, preta, laranja.
   'nota' é o desempenho (nota dos jurados, pinos, tempo...); 'unidade'
   troca o rótulo: sem unidade aparece "nota 342"; com unidade: "1.026 pontos".
   'artigo' (o/a) é usado na legenda do Instagram ("a Equipe X venceu a Noite Cultural").
   ===================================================================== */
const PLACAR = {
  atualizado: '13/11, 20h',
  resultados: [
    {
      titulo: 'Noite Cultural', artigo: 'a',
      sub: 'Batalha de Dança + Talento Escondido',
      data: '26/10', local: 'Teatro Municipal',
      tabela: 'show',
      colocacao: [
        { eq: 'verde', nota: '342' },
        { eq: 'laranja', nota: '338,5' },
        { eq: 'amarela', nota: '307' },
        { eq: 'azul', nota: '307' },
        { eq: 'branca', nota: '286' },
        { eq: 'preta', nota: '270' }
      ],
      obs: 'Nota final: soma das notas dos jurados no Talento Escondido e na Batalha de Dança. Amarela e Azul empataram com 307; a Amarela ficou em 3º no desempate.'
    },
    {
      titulo: 'Bolão',
      sub: 'Equipes mistas · 4 pistas, 2 passadas',
      data: '26/10', local: 'Clube Atalaia',
      tabela: 'geral', unidade: 'pontos',
      colocacao: [
        { eq: 'amarela', nota: '1.026' },
        { eq: 'preta', nota: '1.008' },
        { eq: 'laranja', nota: '983' },
        { eq: 'branca', nota: '954' },
        { eq: 'verde', nota: '951' },
        { eq: 'azul', nota: '912' }
      ]
    },
    {
      titulo: 'Bocha',
      sub: 'Duplas livres',
      data: '27/10', local: 'Clube Atalaia',
      tabela: 'geral',
      colocacao: [
        { eq: 'branca' }, { eq: 'azul' }, { eq: 'laranja' },
        { eq: 'verde' }, { eq: 'amarela' }, { eq: 'preta' }
      ]
    },
    {
      titulo: 'Tênis de Mesa', artigo: 'o',
      sub: 'Masculino',
      data: '27/10', local: 'C.T. de Tênis de Mesa',
      tabela: 'geral',
      colocacao: [
        { eq: 'preta' }, { eq: 'azul' }, { eq: 'amarela' },
        { eq: 'laranja' }, { eq: 'branca' }, { eq: 'verde' }
      ],
      obs: 'Pódio individual: Germano Toledo Alves (Preta), Guilherme Rafael de Souza (Azul) e Willey Kozlik Silva (Amarela).'
    },
    {
      titulo: 'Cerimônia de Abertura', artigo: 'a',
      sub: 'Animação, disciplina e participação',
      data: '28/10', local: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      pontos: { azul: 30, verde: 30, amarela: 30, branca: 30, preta: 30, laranja: 30 },
      obs: 'As seis equipes somaram os 30 pontos da Cerimônia de Abertura.'
    },
    {
      titulo: 'Cabo de Guerra', artigo: 'o',
      sub: 'Masculino',
      data: '28/10', local: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      tabela: 'geral',
      colocacao: [
        { eq: 'preta' }, { eq: 'branca' }, { eq: 'laranja' }, { eq: 'azul' }, { eq: 'amarela' }
      ],
      obs: 'A Equipe Verde não se inscreveu no masculino e não pontua.'
    },
    {
      titulo: 'Cabo de Guerra', artigo: 'o',
      sub: 'Feminino',
      data: '28/10', local: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      tabela: 'geral',
      colocacao: [
        { eq: 'laranja' }, { eq: 'azul' }, { eq: 'amarela' }, { eq: 'verde' }, { eq: 'branca' }
      ],
      pontos: { preta: -5 }, rotulo: { preta: 'W.O.' },
      obs: 'A Equipe Preta não compareceu (W.O.) e perde 5 pontos.'
    },
    {
      titulo: 'Tênis de Mesa', artigo: 'o',
      sub: 'Feminino',
      data: '04/11', local: 'C.T. de Tênis de Mesa',
      tabela: 'geral',
      colocacao: [
        { eq: 'laranja' }, { eq: 'preta' }, { eq: 'azul' },
        { eq: 'verde' }, { eq: 'amarela' }, { eq: 'branca' }
      ],
      obs: 'Pódio individual: Cristiane Dominico Lacerda (Preta), Jaqueline do C. Chamberlain (Laranja) e Jessica Kiczevi (Laranja).'
    },
    {
      titulo: 'Caçador/Queimada', artigo: 'o',
      sub: 'Masculino',
      data: '04/11', local: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      tabela: 'geral',
      colocacao: [
        { eq: 'laranja' }, { eq: 'azul' }, { eq: 'amarela' }, { eq: 'preta' }, { eq: 'branca' }
      ],
      obs: 'A Equipe Verde não disputou o masculino e não pontua.'
    },
    {
      titulo: 'Caçador/Queimada', artigo: 'o',
      sub: 'Feminino',
      data: '04/11', local: 'Arena Ilumina Guarapuava (Ginásio Joaquim Prestes)',
      tabela: 'geral',
      colocacao: [
        { eq: 'verde' }, { eq: 'laranja' }, { eq: 'branca' }, { eq: 'amarela' }, { eq: 'azul' }
      ],
      pontos: { preta: -5 }, rotulo: { preta: 'W.O.' },
      obs: 'A Equipe Preta não compareceu (W.O.) e perde 5 pontos.'
    },
    {
      titulo: 'Sinuca', artigo: 'a',
      sub: 'Duplas masculinas, femininas e mistas',
      data: '05/11', local: 'Clube Atalaia',
      tabela: 'geral',
      colocacao: [
        { eq: 'azul' }, { eq: 'laranja' }, { eq: 'preta' },
        { eq: 'verde' }, { eq: 'branca' }, { eq: 'amarela' }
      ]
    },
    {
      titulo: 'Truco', artigo: 'o',
      sub: 'Duplas',
      data: '05/11', local: 'Clube Atalaia',
      tabela: 'geral',
      colocacao: [
        { eq: 'laranja' }, { eq: 'preta' }, { eq: 'branca' },
        { eq: 'azul' }, { eq: 'amarela' }, { eq: 'verde' }
      ]
    },
    {
      titulo: 'Xadrez', artigo: 'o',
      sub: 'Masculino',
      data: '05/11', local: 'Clube Atalaia',
      tabela: 'geral',
      colocacao: [
        { eq: 'laranja' }, { eq: 'azul' }, { eq: 'amarela' },
        { eq: 'verde' }, { eq: 'branca' }, { eq: 'preta' }
      ]
    },
    {
      titulo: 'Xadrez', artigo: 'o',
      sub: 'Feminino',
      data: '05/11', local: 'Clube Atalaia',
      tabela: 'geral',
      colocacao: [
        { eq: 'amarela' }, { eq: 'verde' }, { eq: 'laranja' },
        { eq: 'azul' }, { eq: 'preta' }, { eq: 'branca' }
      ]
    },
    {
      titulo: 'Caminhada Noturna', artigo: 'a',
      sub: 'Parque das Araucárias',
      data: '05/11', local: 'Parque das Araucárias',
      pontos: { azul: 10, verde: 10, amarela: 10, branca: 10, preta: 10, laranja: 10 },
      obs: 'As seis equipes somaram os 10 pontos da Caminhada Noturna.'
    },
    {
      titulo: 'Vôlei de Quadra', artigo: 'o',
      sub: 'Masculino',
      data: '06/11', local: 'Arena Super Muffato (CIE · Pavão)',
      tabela: 'geral',
      colocacao: [
        { eq: 'azul' }, { eq: 'laranja' }, { eq: 'verde' }, { eq: 'branca' }
      ],
      pontos: { preta: -5 }, rotulo: { preta: 'W.O.' },
      obs: 'A Equipe Amarela não se inscreveu no masculino. A Equipe Preta não compareceu (W.O.) e perde 5 pontos.'
    },
    {
      titulo: 'Vôlei de Quadra', artigo: 'o',
      sub: 'Feminino',
      data: '06/11', local: 'Arena Super Muffato (CIE · Pavão)',
      tabela: 'geral',
      colocacao: [
        { eq: 'verde' }, { eq: 'amarela' }, { eq: 'branca' },
        { eq: 'azul' }, { eq: 'laranja' }, { eq: 'preta' }
      ]
    },
    {
      titulo: 'Basquete 3x3', artigo: 'o',
      sub: 'Veteranos (+40)',
      data: '10/11', local: 'Espaço Cidadão Santana (Ginásio Santana)',
      tabela: 'geral',
      colocacao: [
        { eq: 'branca' }, { eq: 'azul' }, { eq: 'preta' }, { eq: 'laranja' }
      ],
      pontos: { verde: -5 }, rotulo: { verde: 'W.O.' },
      obs: 'A Equipe Amarela não se inscreveu no Veteranos. A Equipe Verde não compareceu (W.O.) e perde 5 pontos.'
    },
    {
      titulo: 'Rapel', artigo: 'o',
      sub: 'Participação · 7 integrantes por equipe',
      data: '10/11', local: 'Praça da Fé',
      pontos: { azul: 10, verde: 10, amarela: 10, branca: 10, preta: 10, laranja: 10 },
      obs: 'As seis equipes somaram os 10 pontos do Rapel.'
    },
    {
      titulo: 'Basquete 3x3', artigo: 'o',
      sub: 'Livre · Masculino',
      data: '11/11', local: 'Espaço Cidadão Santana (Ginásio Santana)',
      tabela: 'geral',
      colocacao: [
        { eq: 'branca' }, { eq: 'azul' }, { eq: 'laranja' }, { eq: 'verde' }, { eq: 'preta' }
      ],
      obs: 'A Equipe Amarela não se inscreveu no masculino.'
    },
    {
      titulo: 'Basquete 3x3', artigo: 'o',
      sub: 'Livre · Feminino',
      data: '11/11', local: 'Espaço Cidadão Santana (Ginásio Santana)',
      tabela: 'geral',
      colocacao: [
        { eq: 'branca' }, { eq: 'laranja' }, { eq: 'amarela' }, { eq: 'azul' }, { eq: 'verde' }
      ],
      obs: 'A Equipe Preta não pontua no feminino.'
    },
    {
      titulo: 'Vôlei de Areia 4x4', artigo: 'o',
      sub: 'Misto',
      data: '12/11', local: 'Arena ATV',
      tabela: 'geral',
      colocacao: [
        { eq: 'azul' }, { eq: 'verde' }, { eq: 'laranja' }, { eq: 'branca' }, { eq: 'amarela' }, { eq: 'preta' }
      ]
    },
    {
      titulo: 'Beach Tennis', artigo: 'o',
      sub: 'Masculino · Duplas',
      data: '12/11', local: 'Arena ATV',
      tabela: 'geral',
      colocacao: [
        { eq: 'laranja' }, { eq: 'verde' }, { eq: 'branca' }, { eq: 'azul' }, { eq: 'preta' }
      ],
      pontos: { amarela: -5 }, rotulo: { amarela: 'W.O.' },
      obs: 'A Equipe Amarela não compareceu (W.O.) e perde 5 pontos.'
    },
    {
      titulo: 'Beach Tennis', artigo: 'o',
      sub: 'Feminino · Duplas',
      data: '12/11', local: 'Arena ATV',
      tabela: 'geral',
      colocacao: [
        { eq: 'verde' }, { eq: 'amarela' }, { eq: 'preta' }, { eq: 'azul' }, { eq: 'branca' }, { eq: 'laranja' }
      ]
    },
    {
      titulo: 'Arrecadação de Alimentos', artigo: 'a',
      sub: 'Alimentos não perecíveis · 2 pontos a cada 200 kg, até 20',
      data: '12/11', local: 'Pesagem oficial',
      pontos: { azul: 20, laranja: 20, branca: 10, verde: 8, amarela: 2, preta: 2 },
      notas: { azul: '2.335 kg', laranja: '2.064,5 kg', branca: '1.011 kg', verde: '994 kg', amarela: '371,5 kg', preta: '284,5 kg' },
      obs: 'Ao todo, as equipes arrecadaram 7.060,5 kg de alimentos. A conferência foi feita pela organização, com um representante de cada equipe.'
    },
    {
      titulo: 'Doação de Sangue', artigo: 'a',
      sub: '2 pontos por doação · O negativo vale 4',
      data: '26/10 a 12/11', local: 'Hemocentro',
      pontos: { amarela: 24, laranja: 24, verde: 24, azul: 22, branca: 22, preta: 16 },
      obs: 'Foram 78 doações durante o JOGA. Cada doação pode salvar até 4 vidas: o JOGA vai ajudar cerca de 312 pessoas.'
    },
    {
      titulo: 'Julgamento dos recursos', artigo: 'o',
      sub: 'Descontos homologados pela Coordenação Disciplinar',
      data: '9 e 13/11', local: 'Relatórios 01 e 02',
      fixa: true,
      pontos: { azul: 0, verde: -13, amarela: -3, branca: -24, preta: -10, laranja: -16 },
      notas: { azul: 'sem desconto' },
      obs: '33 recursos julgados em duas reuniões, com os coordenadores de todas as equipes. Cada caso foi decidido por uma comissão de três representantes sorteados entre as equipes não envolvidas. Por respeito às pessoas envolvidas, os casos não são divulgados.'
    }
  ]
};

(function () {
  const EQ = {
    azul: { n: 'Azul', c: '#1F4FB8' }, verde: { n: 'Verde', c: '#4DAE3F' }, amarela: { n: 'Amarela', c: '#F2C30F' },
    branca: { n: 'Branca', c: '#F5F2E9' }, preta: { n: 'Preta', c: '#0E0E0E' }, laranja: { n: 'Laranja', c: '#E94E2C' }
  };
  const ORDEM = ['azul', 'verde', 'amarela', 'branca', 'preta', 'laranja'];
  const TABELAS = { geral: [20, 17, 15, 14, 13, 12], show: [10, 6, 4, 3, 2, 1] };
  const fmt = n => (Math.round(n * 10) / 10).toLocaleString('pt-BR');
  const sinal = n => (n > 0 ? '+' : n < 0 ? '−' : '') + fmt(Math.abs(n));
  const chip = k => `<span class="stand__c${k === 'branca' ? ' stand__c--b' : ''}" style="--c:${EQ[k].c}"></span>`;

  // pontos de cada resultado
  const linhas = PLACAR.resultados.map(r => {
    const pts = {};
    if (r.colocacao) r.colocacao.forEach((c, i) => { pts[c.eq] = (pts[c.eq] || 0) + (c.pontos !== undefined ? c.pontos : TABELAS[r.tabela || 'geral'][i] || 0); });
    if (r.pontos) Object.keys(r.pontos).forEach(k => { pts[k] = (pts[k] || 0) + r.pontos[k]; });
    return { r, pts };
  });

  // soma geral + 1º lugares (desempate, Art. 28)
  const T = ORDEM.map(k => ({ k, pts: 0, ouro: 0 }));
  const byK = {}; T.forEach(t => byK[t.k] = t);
  linhas.forEach(({ r, pts }) => {
    Object.keys(pts).forEach(k => { if (byK[k]) byK[k].pts += pts[k]; });
    if (r.colocacao && r.colocacao[0]) byK[r.colocacao[0].eq].ouro += 1;
  });
  T.sort((a, b) => b.pts - a.pts || b.ouro - a.ouro || ORDEM.indexOf(a.k) - ORDEM.indexOf(b.k));
  let pos = 0; T.forEach((t, i) => { if (i === 0 || t.pts !== T[i - 1].pts || t.ouro !== T[i - 1].ouro) pos = i + 1; t.pos = pos; });
  const temPontos = linhas.length > 0;

  function render() {
    const tb = document.querySelector('#placarTabela tbody');
    if (tb) tb.innerHTML = T.map(t => `<tr class="${temPontos && t.pos === 1 ? 'is-leader' : ''}">
      <td>${temPontos ? t.pos + 'º' : '–'}</td>
      <td>${chip(t.k)} ${EQ[t.k].n}</td>
      <td>${t.ouro}</td>
      <td>${fmt(t.pts)}</td></tr>`).join('');

    const ld = document.getElementById('placarLider');
    if (ld && temPontos) {
      const lideres = T.filter(t => t.pos === 1); const L = lideres[0]; const ult = PLACAR.resultados[PLACAR.resultados.length - 1];
      const n = PLACAR.resultados.length;
      ld.querySelector('.leader__color').style.setProperty('--c', lideres.length > 1 ? `linear-gradient(135deg,${lideres.map(t => EQ[t.k].c).join(',')})` : EQ[L.k].c);
      ld.querySelector('h3').textContent = lideres.length > 1 ? 'Empate na liderança' : `Equipe ${EQ[L.k].n} na frente`;
      ld.querySelector('p').innerHTML = `Último resultado: <strong>${ult.titulo}</strong> (${ult.data}). ${n} ${n === 1 ? 'resultado computado' : 'resultados computados'} até agora.`;
      ld.querySelector('.leader__big').innerHTML = `${fmt(L.pts)}<span>pts</span>`;
    }
    const at = document.getElementById('placarAtualizado');
    if (at) at.textContent = `AO VIVO · ATUALIZADO EM ${PLACAR.atualizado.toUpperCase()}`;

    const lst = document.getElementById('placarResultados');
    if (lst) lst.innerHTML = linhas.slice().reverse().map(({ r }) => {
      const extra = (r.colocacao && r.pontos) ? Object.keys(r.pontos).map(k => `<li class="res__x"><span class="res__pos">·</span><span class="res__eq">${chip(k)} ${EQ[k].n}</span><span class="res__nota"><small>${(r.rotulo && r.rotulo[k]) || ''}</small></span><span class="res__pts">${sinal(r.pontos[k])}</span></li>`).join('') : '';
      const corpo = r.colocacao ? r.colocacao.map((c, i) => `<li><span class="res__pos">${i + 1}º</span><span class="res__eq">${chip(c.eq)} ${EQ[c.eq].n}</span>${c.nota ? `<span class="res__nota">${r.unidade ? `${c.nota} <small>${r.unidade}</small>` : `<small>nota</small> ${c.nota}`}</span>` : '<span></span>'}<span class="res__pts">${sinal(c.pontos !== undefined ? c.pontos : (TABELAS[r.tabela || 'geral'][i] || 0))}</span></li>`).join('')
        : Object.keys(r.pontos).sort((a, b) => r.fixa ? 0 : r.pontos[b] - r.pontos[a]).map(k => `<li><span class="res__pos">·</span><span class="res__eq">${chip(k)} ${EQ[k].n}</span>${r.notas && r.notas[k] ? `<span class="res__nota">${r.notas[k]}</span>` : '<span></span>'}<span class="res__pts">${sinal(r.pontos[k])}</span></li>`).join('');
      return `<article class="res">
        <header class="res__h"><div><h4>${r.titulo}</h4>${r.sub ? `<p>${r.sub}</p>` : ''}</div><span class="res__d">${r.data}${r.local ? ' · ' + r.local : ''}</span></header>
        <ol class="res__l">${corpo}${extra}</ol>${r.obs ? `<p class="res__o">${r.obs}</p>` : ''}</article>`;
    }).join('');
  }
  // barra fixa com a equipe líder: aparece depois do topo, some quando o placar ou o rodapé estão na tela
  function barra() {
    const bar = document.getElementById('placarBarra'); if (!bar || !temPontos) return;
    const lideres = T.filter(t => t.pos === 1); const L = lideres[0];
    const dot = bar.querySelector('.lbar__c');
    dot.style.setProperty('--c', lideres.length > 1 ? `linear-gradient(135deg,${lideres.map(t => EQ[t.k].c).join(',')})` : EQ[L.k].c);
    dot.style.boxShadow = `0 0 0 3px rgba(255,255,255,.85),0 0 22px ${EQ[L.k].c}`;
    const nome = lideres.length > 1 ? 'Empate: ' + lideres.map(t => EQ[t.k].n).join(' e ') : `Equipe ${EQ[L.k].n}`;
    bar.querySelector('.lbar__n').textContent = nome;
    bar.querySelector('.lbar__p').textContent = `${fmt(L.pts)} pts`;
    bar.setAttribute('aria-label', `Placar geral: ${nome} em 1º, com ${fmt(L.pts)} pontos. Clique para conferir os resultados.`);
    const sec = document.getElementById('placares'), ft = document.querySelector('footer');
    const upd = () => {
      const vh = window.innerHeight, r = sec ? sec.getBoundingClientRect() : null;
      const noPlacar = r && r.top < vh * .8 && r.bottom > vh * .2;
      const noRodape = ft && ft.getBoundingClientRect().top < vh - 40;
      const on = window.scrollY > vh * .6 && !noPlacar && !noRodape;
      bar.classList.toggle('is-on', on); document.body.classList.toggle('has-lbar', on);
    };
    window.addEventListener('scroll', upd, { passive: true }); window.addEventListener('resize', upd); upd();
  }
  function init() { render(); barra(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
