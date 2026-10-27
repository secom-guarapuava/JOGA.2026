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
  atualizado: '27/10, 0h45',
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
      const corpo = r.colocacao ? r.colocacao.map((c, i) => `<li><span class="res__pos">${i + 1}º</span><span class="res__eq">${chip(c.eq)} ${EQ[c.eq].n}</span>${c.nota ? `<span class="res__nota">${r.unidade ? `${c.nota} <small>${r.unidade}</small>` : `<small>nota</small> ${c.nota}`}</span>` : '<span></span>'}<span class="res__pts">${sinal(c.pontos !== undefined ? c.pontos : (TABELAS[r.tabela || 'geral'][i] || 0))}</span></li>`).join('')
        : Object.keys(r.pontos).sort((a, b) => r.pontos[b] - r.pontos[a]).map(k => `<li><span class="res__pos">·</span><span class="res__eq">${chip(k)} ${EQ[k].n}</span><span></span><span class="res__pts">${sinal(r.pontos[k])}</span></li>`).join('');
      return `<article class="res">
        <header class="res__h"><div><h4>${r.titulo}</h4>${r.sub ? `<p>${r.sub}</p>` : ''}</div><span class="res__d">${r.data}${r.local ? ' · ' + r.local : ''}</span></header>
        <ol class="res__l">${corpo}</ol>${r.obs ? `<p class="res__o">${r.obs}</p>` : ''}</article>`;
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
