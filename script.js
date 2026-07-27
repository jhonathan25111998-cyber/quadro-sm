// ---------- DADOS DA SEMANA ----------
let dados = {
    data: "",
    dataISO: "",
    cantoInicial: 0,
    cantoMeio: 0,
    cantoFinal: 0,
    tesouros: [],
    joias: [],
    leitura: [],
    ministerio: [],
    discurso: [],
    vida: [],
    ebc: []
};

// ---------- CONFIGURAÇÃO DA PLANILHA GOOGLE ----------
const PLANILHA_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSpLm4xRT2db5VNlHfQppidLW9hLkve9UuvoQS4bILrqFn0guIcv_du8PWjpTT1Ag7UQ3RN_AnrFIKQ/pub?output=csv';

// Mapeamento das categorias da planilha para as categorias internas
const MAP_CATEGORIA = {
    "PRESIDENTE": "PRESIDÊNCIA",
    "ORAÇÃO": "ORAÇÕES",
    "TESOUROS": "TESOUROS",
    "JOIAS": "JOIAS",
    "LEITURA": "LEITURA DA BÍBLIA",
    "PARTE 1": "PARTES",
    "PARTE 2": "PARTES",
    "PARTE 3": "PARTES",
    "PARTE 4": "PARTES",
    "VIDA CRISTÃ 1": "VIDA CRISTÃ",
    "VIDA CRISTÃ2": "VIDA CRISTÃ",
    "EBC": "EBC",
    "NL": null
};

// ---------- INICIALIZAÇÃO ----------
document.addEventListener('DOMContentLoaded', function() {
    // Carrega os nomes salvos localmente (fallback)
    carregarDadosLocal();
    // Se já houver um XML carregado (ex: recarregou a página), tenta puxar da planilha
    if (dados.dataISO) {
        carregarPlanilhaGoogle();
    }
});

// ---------- FUNÇÕES GLOBAIS ----------
window.gerarVisualizacao = function() {
    document.getElementById('headerTitulo').style.display = 'none';

    const numBase = 4;
    const numMinisterio = numBase;
    const numDiscurso = numBase + dados.ministerio.length;
    const numVida = numBase + dados.ministerio.length + dados.discurso.length;

    const cantoIniTxt = `Cântico - ${dados.cantoInicial} ${CANTICOS[dados.cantoInicial] || ''}`;
    const cantoMeioTxt = `Cântico - ${dados.cantoMeio} "${CANTICOS[dados.cantoMeio] || ''}"`;
    const cantoFinalNum = document.getElementById('cantoFinalNum').value;
    const cantoFinalTxt = `Cântico - ${cantoFinalNum} ${CANTICOS[cantoFinalNum] || ''}`;

    const getVal = (id) => document.getElementById(id).value || '';
    const getParte = (prefix, idx) => {
        const p = document.getElementById(`${prefix}_1`)?.value || '';
        const a = document.getElementById(`${prefix}_2`)?.value || '';
        if (p && a) return `${p} / ${a}`;
        if (p) return p;
        return '';
    };

    let html = `
        <div class="header-title">
            <h1>PROGRAMAÇÃO DAS REUNIÕES</h1>
            <h2>${dados.data.toUpperCase()}</h2>
        </div>
        <div class="colunas">
            <div class="coluna-esq">
                <div class="barra-verde"><span>MEIO DE SEMANA</span><span>${document.getElementById('horario').value}</span></div>
                <div class="info-topo">
                    <div class="linha"><span><b>PRESIDENTE:</b></span> <span>${getVal('presidente')}</span></div>
                    <div class="linha"><span><b>${cantoIniTxt}</b></span> <span></span></div>
                    <div class="linha"><span><b>Oração Inicial:</b></span> <span>${getVal('oracaoInicial')}</span></div>
                </div>
                <div class="box box-azul"><div class="box-title icon-book">TESOUROS DA PALAVRA DEUS</div>
                    ${dados.tesouros.map((t,i)=>`<div class="box-item"><span class="titulo">${i+1}. ${t}</span><span class="nome">${getParte('t'+i)}</span></div>`).join('')}
                    ${dados.joias.map((t,i)=>`<div class="box-item"><span class="titulo">${dados.tesouros.length + i + 1}. ${t}</span><span class="nome">${getParte('j'+i)}</span></div>`).join('')}
                    ${dados.leitura.map((t,i)=>`<div class="box-item"><span class="titulo">${dados.tesouros.length + dados.joias.length + i + 1}. ${t}</span><span class="nome">${getParte('l'+i)}</span></div>`).join('')}
                </div>
                <div class="box box-laranja"><div class="box-title icon-briefcase">FAÇA SEU MELHOR NO MINISTÉRIO</div>
                    ${dados.ministerio.map((t,i)=>`<div class="box-item"><span class="titulo">${numMinisterio + i}. ${t}</span><span class="nome">${getParte('m'+i)}</span></div>`).join('')}
                    ${dados.discurso.map((t,i)=>`<div class="box-item"><span class="titulo">${numDiscurso + i}. ${t}</span><span class="nome">${getParte('d'+i)}</span></div>`).join('')}
                </div>
                <div class="box box-vermelha"><div class="box-title icon-house">NOSSA VIDA CRISTÃ</div>
                    <div class="box-item"><span class="titulo"><b>${cantoMeioTxt}</b></span><span class="nome"></span></div>
                    ${dados.vida.map((t,i)=>`<div class="box-item"><span class="titulo">${numVida + i}. ${t}</span><span class="nome">${getParte('v'+i)}</span></div>`).join('')}
                    ${dados.ebc.map((t,i)=>`<div class="box-item"><span class="titulo">${numVida + dados.vida.length + i}. ${t}</span><span class="nome">${getParte('e'+i)}</span></div>`).join('')}
                    <div class="box-item" style="border-top:1px dashed #ccc; margin-top:4px; padding-top:4px;"><span class="titulo"><b>Leitor:</b></span> <span class="nome">${getVal('leitor')}</span></div>
                </div>
                <div class="rodape-esq"><div><b>${cantoFinalTxt}!!</b></div><div>Oração Final: ${getVal('oracaoFinal')}</div></div>
            </div>
            <div class="coluna-dir">
                <div class="box-mecanicas">
                    <div class="box-title icon-people">MECÂNICAS</div>
                    <div class="mecanica-grupo"><span class="icon-people"></span>Indicador de entrada: <b>${getVal('indEntrada')}</b><br><span class="icon-people"></span>Indicador do Auditório: <b>${getVal('indAuditorio')}</b><br><span class="icon-people"></span>Indicador do Zoom: <b>${getVal('indZoom')}</b></div>
                    <div class="mecanica-grupo"><span class="icon-comp"></span>Mídias: <b>${getVal('midias')}</b><br><span class="icon-comp"></span>Audio: <b>${getVal('audio')}</b></div>
                    <div class="mecanica-grupo"><span class="icon-mic"></span>Microfone 1: <b>${getVal('mic1')}</b><br><span class="icon-mic"></span>Microfone 2: <b>${getVal('mic2')}</b><br><span class="icon-mic"></span>Palco: <b>${getVal('palco')}</b></div>
                </div>
                <div class="citacao-box">“${document.getElementById('citacao').value}” - <b>Jeremias 17:5</b></div>
            </div>
        </div>
        <div class="footer-img"><img src="${document.getElementById('urlImagem').value}" alt="Ilustração"></div>
    `;

    document.getElementById('layoutFinal').innerHTML = html;
    document.getElementById('editMode').style.display = 'none';
    document.getElementById('finalMode').style.display = 'block';
};

window.voltarEdicao = function() {
    document.getElementById('headerTitulo').style.display = 'block';
    document.getElementById('finalMode').style.display = 'none';
    document.getElementById('editMode').style.display = 'block';
};

// ---------- FUNÇÕES INTERNAS ----------

// Salva e carrega os dados localmente (fallback)
function salvarDadosLocal() {
    const dataToSave = {
        categorias: categorias,
        dados: dados
    };
    localStorage.setItem('designacoesData', JSON.stringify(dataToSave));
}

function carregarDadosLocal() {
    const stored = localStorage.getItem('designacoesData');
    if (stored) {
        const parsed = JSON.parse(stored);
        categorias = parsed.categorias || {};
        dados = parsed.dados || dados;
        preencherTodosInputs();
    } else {
        // Inicializa categorias vazias
        categorias = {
            "ORAÇÕES": [],
            "PRESIDÊNCIA": [],
            "PARTES": [],
            "JOIAS": [],
            "LEITURA DA BÍBLIA": [],
            "TESOUROS": [],
            "VIDA CRISTÃ": [],
            "EBC": [],
            "LEITOR": [],
            "DISCURSO": [],
            "Indicador Entrada": [],
            "Indicador Auditório": [],
            "Indicador Zoom": [],
            "Microfone": [],
            "Mídia": [],
            "Palco": []
        };
        salvarDadosLocal();
    }
}

// Normalização de nomes
function normalizarNome(nome) {
    nome = nome.trim();
    return nome.split(/\s+/).map(part => {
        return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
    }).join(' ');
}

// ---------- CONVERSÃO DA DATA DO XML PARA ISO ----------
function converterDataParaISO(dataTexto) {
    const anoAtual = new Date().getFullYear(); // ou fixo: 2026
    let partes = dataTexto.replace(/ de /g, ' ').replace(/–/g, '-').split(' ');
    let dia, mes;
    if (partes.length >= 2) {
        let primeiro = partes[0];
        if (primeiro.includes('-')) {
            dia = parseInt(primeiro.split('-')[0]);
        } else {
            dia = parseInt(primeiro);
        }
        const meses = {
            'janeiro': 1, 'fevereiro': 2, 'março': 3, 'abril': 4,
            'maio': 5, 'junho': 6, 'julho': 7, 'agosto': 8,
            'setembro': 9, 'outubro': 10, 'novembro': 11, 'dezembro': 12
        };
        for (let p of partes) {
            let m = p.toLowerCase();
            if (meses[m]) {
                mes = meses[m];
                break;
            }
        }
    }
    if (dia && mes) {
        const diaStr = String(dia).padStart(2, '0');
        const mesStr = String(mes).padStart(2, '0');
        return `${anoAtual}-${mesStr}-${diaStr}`;
    }
    return null;
}

// ---------- LEITURA DA PLANILHA GOOGLE (CORRIGIDA) ----------
async function carregarPlanilhaGoogle() {
    if (!PLANILHA_URL) return;
    if (!dados.dataISO) {
        console.warn('Data da semana não definida. Carregue o XML primeiro.');
        return;
    }

    try {
        const response = await fetch(PLANILHA_URL);
        const csvText = await response.text();
        const linhas = csvText.split(/\r?\n/).filter(l => l.trim() !== '');
        if (linhas.length < 2) return;

        // 1. Extrair as datas do cabeçalho (qualquer coluna que pareça YYYY-MM-DD)
        const cabecalho = linhas[0].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
        const weekDates = [];
        for (let i = 0; i < cabecalho.length; i++) {
            const val = cabecalho[i];
            if (val && val.match(/^\d{4}-\d{2}-\d{2}$/)) {
                weekDates.push({ index: i, date: val });
            }
        }
        if (weekDates.length === 0) {
            console.warn('Nenhuma data encontrada no cabeçalho. Verifique se o CSV está correto.');
            return;
        }

        // 2. Para cada linha de dados, extrair categoria e nome para cada semana
        let dadosCarregados = 0;
        for (let l = 1; l < linhas.length; l++) {
            const cols = linhas[l].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
            const primeiraColuna = cols[0] || '';

            // Pular linhas de correção ou notas
            if (primeiraColuna.match(/^(JH\?ONATH\?AN|CAIO|FAGNER|GUSTAVO|JO\(A|VIT\(O|LUCAS|IRINEU|LU\[IÍ\]S|TALES|ADRIANO)/i)) {
                continue;
            }
            if (primeiraColuna.includes('NECESSIDADES LOCAIS')) {
                continue;
            }

            // Para cada semana, tentar extrair categoria e nome
            for (const week of weekDates) {
                const dateIndex = week.index;
                // A categoria está na coluna dateIndex, o nome na dateIndex+1
                const categoriaRaw = cols[dateIndex] || '';
                const nomeRaw = cols[dateIndex + 1] || '';

                // Se a categoria não for uma das mapeadas, pula
                if (!categoriaRaw) continue;
                const categoriaInterna = MAP_CATEGORIA[categoriaRaw];
                if (!categoriaInterna) continue;

                // Se não houver nome, pula
                if (!nomeRaw) continue;

                // Dividir nomes por separadores
                let nomes = [];
                if (nomeRaw.includes(' - ')) {
                    nomes = nomeRaw.split(' - ').map(n => n.trim());
                } else if (nomeRaw.includes('-')) {
                    nomes = nomeRaw.split('-').map(n => n.trim());
                } else if (nomeRaw.includes('/')) {
                    nomes = nomeRaw.split('/').map(n => n.trim());
                } else {
                    nomes = [nomeRaw];
                }

                // Adicionar à categoria
                if (!categorias[categoriaInterna]) {
                    categorias[categoriaInterna] = [];
                }
                nomes.forEach(nome => {
                    const nomeNormalizado = normalizarNome(nome);
                    if (nomeNormalizado && !categorias[categoriaInterna].includes(nomeNormalizado)) {
                        categorias[categoriaInterna].push(nomeNormalizado);
                        dadosCarregados++;
                    }
                });
            }
        }

        if (dadosCarregados > 0) {
            salvarDadosLocal();
            preencherTodosInputs();
            console.log(`${dadosCarregados} nomes carregados para a semana ${dados.dataISO}.`);
        } else {
            console.log(`Nenhum nome encontrado para a semana ${dados.dataISO}.`);
        }
    } catch (e) {
        console.warn('Erro ao carregar a planilha:', e);
    }
}

// ---------- PREENCHER OS INPUTS (texto) ----------
function preencherTodosInputs() {
    // Preenche inputs fixos (Presidente, Oração Inicial, Leitor, Oração Final)
    const fixos = [
        { id: 'presidente', categoria: 'PRESIDÊNCIA' },
        { id: 'oracaoInicial', categoria: 'ORAÇÕES' },
        { id: 'leitor', categoria: 'LEITOR' },
        { id: 'oracaoFinal', categoria: 'ORAÇÕES' },
        { id: 'indEntrada', categoria: 'Indicador Entrada' },
        { id: 'indAuditorio', categoria: 'Indicador Auditório' },
        { id: 'indZoom', categoria: 'Indicador Zoom' },
        { id: 'midias', categoria: 'Mídia' },
        { id: 'audio', categoria: 'Mídia' },
        { id: 'mic1', categoria: 'Microfone' },
        { id: 'mic2', categoria: 'Microfone' },
        { id: 'palco', categoria: 'Palco' }
    ];

    fixos.forEach(f => {
        const input = document.getElementById(f.id);
        if (!input) return;
        // Se já houver um valor manual, mantém; senão preenche com o primeiro nome da categoria
        if (input.value === '') {
            const nomes = categorias[f.categoria] || [];
            if (nomes.length > 0) {
                input.value = nomes[0];
            }
        }
    });

    // Preenche inputs dinâmicos (Tesouros, Ministério, Vida)
    preencherPartesInputs();
}

function preencherPartesInputs() {
    const containerT = document.getElementById('tesourosForm');
    const containerM = document.getElementById('ministerioForm');
    const containerV = document.getElementById('vidaForm');
    if (containerT) containerT.innerHTML = '';
    if (containerM) containerM.innerHTML = '';
    if (containerV) containerV.innerHTML = '';

    // ---- TESOUROS ----
    if (containerT && dados.tesouros.length > 0) {
        let html = '<h3>TESOUROS</h3>';
        dados.tesouros.forEach((t, i) => {
            // Pega o nome da categoria TESOUROS (se houver)
            const nomes = categorias['TESOUROS'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            html += `<div class="form-item"><label>${i+1}. ${t}</label>`;
            html += `<div style="flex:1; display:flex; gap:4px;">`;
            html += `<input type="text" id="t${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;">`;
            html += `<input type="text" id="t${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;">`;
            html += `</div></div>`;
        });
        containerT.innerHTML = html;
    }

    // ---- JOIAS ----
    if (containerT && dados.joias.length > 0) {
        dados.joias.forEach((t, i) => {
            const nomes = categorias['JOIAS'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><input type="text" id="j${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;"><input type="text" id="j${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;"></div>`;
            containerT.appendChild(div);
        });
    }

    // ---- LEITURA DA BÍBLIA ----
    if (containerT && dados.leitura.length > 0) {
        dados.leitura.forEach((t, i) => {
            const nomes = categorias['LEITURA DA BÍBLIA'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><input type="text" id="l${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;"><input type="text" id="l${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;"></div>`;
            containerT.appendChild(div);
        });
    }

    // ---- MINISTÉRIO ----
    if (containerM && dados.ministerio.length > 0) {
        let html = '<h3>MINISTÉRIO</h3>';
        dados.ministerio.forEach((t, i) => {
            const nomes = categorias['PARTES'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            html += `<div class="form-item"><label>${i+4}. ${t}</label>`;
            html += `<div style="flex:1; display:flex; gap:4px;">`;
            html += `<input type="text" id="m${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;">`;
            html += `<input type="text" id="m${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;">`;
            html += `</div></div>`;
        });
        containerM.innerHTML = html;
    }

    // ---- DISCURSO ----
    if (containerM && dados.discurso.length > 0) {
        dados.discurso.forEach((t, i) => {
            const nomes = categorias['DISCURSO'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><input type="text" id="d${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;"><input type="text" id="d${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;"></div>`;
            containerM.appendChild(div);
        });
    }

    // ---- VIDA CRISTÃ ----
    if (containerV && dados.vida.length > 0) {
        const numVida = 4 + dados.ministerio.length + dados.discurso.length;
        let html = '<h3>VIDA CRISTÃ</h3>';
        dados.vida.forEach((t, i) => {
            const nomes = categorias['VIDA CRISTÃ'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            html += `<div class="form-item"><label>${numVida+i}. ${t}</label>`;
            html += `<div style="flex:1; display:flex; gap:4px;">`;
            html += `<input type="text" id="v${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;">`;
            html += `<input type="text" id="v${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;">`;
            html += `</div></div>`;
        });
        containerV.innerHTML = html;
    }

    // ---- EBC ----
    if (containerV && dados.ebc.length > 0) {
        dados.ebc.forEach((t, i) => {
            const nomes = categorias['EBC'] || [];
            const nomePrincipal = nomes.length > 0 ? nomes[0] : '';
            const nomeAjudante = nomes.length > 1 ? nomes[1] : '';
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><input type="text" id="e${i}_1" value="${nomePrincipal}" placeholder="Principal" style="flex:1;"><input type="text" id="e${i}_2" value="${nomeAjudante}" placeholder="Ajudante" style="flex:1;"></div>`;
            containerV.appendChild(div);
        });
    }
}

// ---------- LEITURA DO XML ----------
document.getElementById('fileInput').addEventListener('change', async function(e) {
    const file = e.target.files[0];
    if (!file) return;
    const text = await file.text();
    const xmlDoc = new DOMParser().parseFromString(text, 'text/xml');

    dados.data = xmlDoc.querySelector('level1 > h1')?.textContent.trim() || "DATA";
    document.getElementById('dataInput').value = dados.data;
    document.getElementById('semanaData').textContent = dados.data.toUpperCase();

    dados.dataISO = converterDataParaISO(dados.data);
    if (dados.dataISO) {
        console.log('Data da semana convertida para ISO:', dados.dataISO);
        carregarPlanilhaGoogle();
    } else {
        console.warn('Não foi possível converter a data do XML para ISO.');
    }

    let allSongs = [];
    xmlDoc.querySelectorAll('level2').forEach(section => {
        const h2 = section.querySelector('h2')?.textContent.toUpperCase() || "";
        const items = [];
        section.querySelectorAll('level3 > h3').forEach(h3 => {
            let txt = h3.textContent.trim();
            let match = txt.match(/Cântico\s*(\d+)/i);
            if (match) allSongs.push(parseInt(match[1]));
            else items.push(txt.replace(/^\d+\.\s*/, ''));
        });
        if (h2.includes('TESOUROS')) {
            const joias = items.filter(item => item.includes('Joias espirituais'));
            const leitura = items.filter(item => item.includes('Leitura da Bíblia'));
            const resto = items.filter(item => !item.includes('Joias espirituais') && !item.includes('Leitura da Bíblia'));
            dados.tesouros = resto;
            dados.joias = joias;
            dados.leitura = leitura;
        }
        if (h2.includes('MINISTÉRIO')) {
            const discurso = items.filter(item => item.includes('Discurso'));
            const resto = items.filter(item => !item.includes('Discurso'));
            dados.ministerio = resto;
            dados.discurso = discurso;
        }
        if (h2.includes('VIDA CRISTÃ')) {
            const ebc = items.filter(item => item.includes('Estudo bíblico de congregação'));
            const resto = items.filter(item => !item.includes('Estudo bíblico de congregação'));
            dados.vida = resto;
            dados.ebc = ebc;
        }
    });

    if (allSongs.length >= 3) {
        dados.cantoInicial = allSongs[0];
        dados.cantoMeio = allSongs[1];
        dados.cantoFinal = allSongs[allSongs.length-1];
    }

    preencherTodosInputs();
    document.getElementById('cantoFinalNum').value = dados.cantoFinal;

    const citacaoArea = document.getElementById('citacao');
    if (dados.tesouros.length > 0) {
        const textoBusca = dados.tesouros.join(' ');
        const match = textoBusca.match(/([A-Za-z0-9\s\.]+:\d+(?:,\s*\d+)?)/);
        if (match) {
            citacaoArea.value = `“${match[0]}” — Leitura da semana`;
        }
    }

    document.getElementById('editMode').style.display = 'block';
    document.getElementById('uploadArea').style.display = 'none';
});
