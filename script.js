// ---------- DADOS DA SEMANA ----------
let dados = {
    data: "",
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

// ---------- ESTRUTURA DE CATEGORIAS E NOMES ----------
let categorias = {};

// ---------- INICIALIZAÇÃO ----------
document.addEventListener('DOMContentLoaded', function() {
    carregarCategorias();
});

// ---------- FUNÇÕES GLOBAIS (para onclick) ----------
window.abrirConfig = function() {
    document.getElementById('configModal').classList.add('active');
    renderizarCategoriasUI();
    preencherSelectImport();
};

window.fecharConfig = function() {
    document.getElementById('configModal').classList.remove('active');
};

window.adicionarCategoria = function() {
    const input = document.getElementById('novaCategoria');
    const cat = input.value.trim();
    if (cat && !categorias[cat]) {
        categorias[cat] = [];
        salvarCategorias();
        input.value = '';
    }
};

window.removerCategoria = function(cat) {
    if (confirm(`Remover categoria "${cat}" e todos os seus nomes?`)) {
        delete categorias[cat];
        salvarCategorias();
    }
};

window.adicionarNome = function(cat) {
    const input = document.getElementById(`novoNome_${cat}`);
    const nome = input.value.trim();
    if (nome && !categorias[cat].includes(nome)) {
        categorias[cat].push(nome);
        salvarCategorias();
        input.value = '';
    }
};

window.removerNome = function(cat, nome) {
    categorias[cat] = categorias[cat].filter(n => n !== nome);
    salvarCategorias();
};

window.importarNomes = function() {
    const cat = document.getElementById('importCategoria').value;
    if (!cat) {
        alert('Selecione uma categoria.');
        return;
    }
    const text = document.getElementById('importTextarea').value;
    const nomes = text.split(/\r?\n/).map(s => s.trim()).filter(s => s.length > 0);
    if (nomes.length === 0) {
        alert('Nenhum nome válido encontrado.');
        return;
    }
    let adicionados = 0;
    nomes.forEach(nome => {
        if (!categorias[cat].includes(nome)) {
            categorias[cat].push(nome);
            adicionados++;
        }
    });
    if (adicionados > 0) {
        salvarCategorias();
        alert(`${adicionados} nome(s) importados para a categoria "${cat}".`);
    } else {
        alert('Todos os nomes já existem nesta categoria.');
    }
    document.getElementById('importTextarea').value = '';
};

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

// ---------- FUNÇÕES INTERNAS (não precisam ser globais) ----------
function carregarCategorias() {
    const stored = localStorage.getItem('categoriasIrmãos');
    if (stored) {
        categorias = JSON.parse(stored);
    } else {
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
        salvarCategorias();
    }
    renderizarCategoriasUI();
    preencherTodosSelects();
    preencherSelectImport();
}

function salvarCategorias() {
    localStorage.setItem('categoriasIrmãos', JSON.stringify(categorias));
    renderizarCategoriasUI();
    preencherTodosSelects();
    preencherSelectImport();
}

function renderizarCategoriasUI() {
    const container = document.getElementById('categoriasContainer');
    let html = '';
    for (const [cat, nomes] of Object.entries(categorias)) {
        html += `<div style="border:1px solid #ddd; padding:8px; margin-bottom:8px; border-radius:4px;">`;
        html += `<div style="display:flex; justify-content:space-between; align-items:center;">`;
        html += `<strong>${cat}</strong>`;
        html += `<button onclick="removerCategoria('${cat}')" style="padding:2px 8px;">🗑️</button>`;
        html += `</div>`;
        html += `<div style="display:flex; gap:5px; margin:5px 0;">`;
        html += `<input type="text" id="novoNome_${cat}" placeholder="Adicionar nome..." style="flex:1; padding:4px;">`;
        html += `<button onclick="adicionarNome('${cat}')" style="padding:4px 10px;">+</button>`;
        html += `</div>`;
        html += `<ul class="nomes-lista">`;
        nomes.forEach(nome => {
            html += `<li><span>${nome}</span> <button onclick="removerNome('${cat}', '${nome}')" style="padding:0 6px;">✕</button></li>`;
        });
        html += `</ul>`;
        html += `</div>`;
    }
    container.innerHTML = html;
}

function preencherSelectImport() {
    const select = document.getElementById('importCategoria');
    if (!select) return;
    const current = select.value;
    select.innerHTML = '';
    const opt = document.createElement('option');
    opt.value = '';
    opt.textContent = 'Selecione uma categoria';
    select.appendChild(opt);
    for (const cat of Object.keys(categorias)) {
        const opt2 = document.createElement('option');
        opt2.value = cat;
        opt2.textContent = cat;
        if (cat === current) opt2.selected = true;
        select.appendChild(opt2);
    }
}

function preencherTodosSelects() {
    // Preenche selects fixos
    document.querySelectorAll('.form-item[data-categoria]').forEach(item => {
        const select = item.querySelector('select');
        if (!select) return;
        const categoria = item.dataset.categoria;
        const current = select.value;
        select.innerHTML = '';
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = '(Selecione)';
        select.appendChild(opt);
        if (categorias[categoria]) {
            categorias[categoria].forEach(nome => {
                const opt2 = document.createElement('option');
                opt2.value = nome;
                opt2.textContent = nome;
                if (nome === current) opt2.selected = true;
                select.appendChild(opt2);
            });
        }
    });

    preencherPartesSelects();
}

function preencherPartesSelects() {
    // TESOUROS
    const containerT = document.getElementById('tesourosForm');
    if (containerT && dados.tesouros.length > 0) {
        let html = '<h3>TESOUROS</h3>';
        dados.tesouros.forEach((t, i) => {
            html += `<div class="form-item"><label>${i+1}. ${t}</label>`;
            html += `<div style="flex:1; display:flex; gap:4px;">`;
            html += `<select id="t${i}_1" data-categoria="TESOUROS" style="flex:1;"><option value="">Principal</option></select>`;
            html += `<select id="t${i}_2" data-categoria="TESOUROS" style="flex:1;"><option value="">Ajudante</option></select>`;
            html += `</div></div>`;
        });
        containerT.innerHTML = html;
        containerT.querySelectorAll('select[data-categoria]').forEach(sel => {
            const cat = sel.dataset.categoria;
            const current = sel.value;
            sel.innerHTML = '';
            const opt = document.createElement('option');
            opt.value = '';
            opt.textContent = '(Selecione)';
            sel.appendChild(opt);
            if (categorias[cat]) {
                categorias[cat].forEach(nome => {
                    const opt2 = document.createElement('option');
                    opt2.value = nome;
                    opt2.textContent = nome;
                    if (nome === current) opt2.selected = true;
                    sel.appendChild(opt2);
                });
            }
        });
    }

    // JOIAS e LEITURA
    const containerT2 = document.getElementById('tesourosForm');
    if (containerT2) {
        dados.joias.forEach((t, i) => {
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><select id="j${i}_1" data-categoria="JOIAS" style="flex:1;"><option value="">Principal</option></select><select id="j${i}_2" data-categoria="JOIAS" style="flex:1;"><option value="">Ajudante</option></select></div>`;
            containerT2.appendChild(div);
            const selects = div.querySelectorAll('select');
            selects.forEach(sel => {
                const cat = sel.dataset.categoria;
                const current = sel.value;
                sel.innerHTML = '';
                const opt = document.createElement('option');
                opt.value = '';
                opt.textContent = '(Selecione)';
                sel.appendChild(opt);
                if (categorias[cat]) {
                    categorias[cat].forEach(nome => {
                        const opt2 = document.createElement('option');
                        opt2.value = nome;
                        opt2.textContent = nome;
                        if (nome === current) opt2.selected = true;
                        sel.appendChild(opt2);
                    });
                }
            });
        });
        dados.leitura.forEach((t, i) => {
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><select id="l${i}_1" data-categoria="LEITURA DA BÍBLIA" style="flex:1;"><option value="">Principal</option></select><select id="l${i}_2" data-categoria="LEITURA DA BÍBLIA" style="flex:1;"><option value="">Ajudante</option></select></div>`;
            containerT2.appendChild(div);
            const selects = div.querySelectorAll('select');
            selects.forEach(sel => {
                const cat = sel.dataset.categoria;
                const current = sel.value;
                sel.innerHTML = '';
                const opt = document.createElement('option');
                opt.value = '';
                opt.textContent = '(Selecione)';
                sel.appendChild(opt);
                if (categorias[cat]) {
                    categorias[cat].forEach(nome => {
                        const opt2 = document.createElement('option');
                        opt2.value = nome;
                        opt2.textContent = nome;
                        if (nome === current) opt2.selected = true;
                        sel.appendChild(opt2);
                    });
                }
            });
        });
    }

    // MINISTÉRIO
    const containerM = document.getElementById('ministerioForm');
    if (containerM) {
        let html = '<h3>MINISTÉRIO</h3>';
        dados.ministerio.forEach((t, i) => {
            html += `<div class="form-item"><label>${i+4}. ${t}</label>`;
            html += `<div style="flex:1; display:flex; gap:4px;">`;
            html += `<select id="m${i}_1" data-categoria="PARTES" style="flex:1;"><option value="">Principal</option></select>`;
            html += `<select id="m${i}_2" data-categoria="PARTES" style="flex:1;"><option value="">Ajudante</option></select>`;
            html += `</div></div>`;
        });
        containerM.innerHTML = html;
        containerM.querySelectorAll('select[data-categoria]').forEach(sel => {
            const cat = sel.dataset.categoria;
            const current = sel.value;
            sel.innerHTML = '';
            const opt = document.createElement('option');
            opt.value = '';
            opt.textContent = '(Selecione)';
            sel.appendChild(opt);
            if (categorias[cat]) {
                categorias[cat].forEach(nome => {
                    const opt2 = document.createElement('option');
                    opt2.value = nome;
                    opt2.textContent = nome;
                    if (nome === current) opt2.selected = true;
                    sel.appendChild(opt2);
                });
            }
        });

        dados.discurso.forEach((t, i) => {
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><select id="d${i}_1" data-categoria="DISCURSO" style="flex:1;"><option value="">Principal</option></select><select id="d${i}_2" data-categoria="DISCURSO" style="flex:1;"><option value="">Ajudante</option></select></div>`;
            containerM.appendChild(div);
            const selects = div.querySelectorAll('select');
            selects.forEach(sel => {
                const cat = sel.dataset.categoria;
                const current = sel.value;
                sel.innerHTML = '';
                const opt = document.createElement('option');
                opt.value = '';
                opt.textContent = '(Selecione)';
                sel.appendChild(opt);
                if (categorias[cat]) {
                    categorias[cat].forEach(nome => {
                        const opt2 = document.createElement('option');
                        opt2.value = nome;
                        opt2.textContent = nome;
                        if (nome === current) opt2.selected = true;
                        sel.appendChild(opt2);
                    });
                }
            });
        });
    }

    // VIDA CRISTÃ
    const containerV = document.getElementById('vidaForm');
    if (containerV) {
        const numVida = 4 + dados.ministerio.length + dados.discurso.length;
        let html = '<h3>VIDA CRISTÃ</h3>';
        dados.vida.forEach((t, i) => {
            html += `<div class="form-item"><label>${numVida+i}. ${t}</label>`;
            html += `<div style="flex:1; display:flex; gap:4px;">`;
            html += `<select id="v${i}_1" data-categoria="VIDA CRISTÃ" style="flex:1;"><option value="">Principal</option></select>`;
            html += `<select id="v${i}_2" data-categoria="VIDA CRISTÃ" style="flex:1;"><option value="">Ajudante</option></select>`;
            html += `</div></div>`;
        });
        containerV.innerHTML = html;
        containerV.querySelectorAll('select[data-categoria]').forEach(sel => {
            const cat = sel.dataset.categoria;
            const current = sel.value;
            sel.innerHTML = '';
            const opt = document.createElement('option');
            opt.value = '';
            opt.textContent = '(Selecione)';
            sel.appendChild(opt);
            if (categorias[cat]) {
                categorias[cat].forEach(nome => {
                    const opt2 = document.createElement('option');
                    opt2.value = nome;
                    opt2.textContent = nome;
                    if (nome === current) opt2.selected = true;
                    sel.appendChild(opt2);
                });
            }
        });

        dados.ebc.forEach((t, i) => {
            const div = document.createElement('div');
            div.className = 'form-item';
            div.innerHTML = `<label>${t}</label><div style="flex:1; display:flex; gap:4px;"><select id="e${i}_1" data-categoria="EBC" style="flex:1;"><option value="">Principal</option></select><select id="e${i}_2" data-categoria="EBC" style="flex:1;"><option value="">Ajudante</option></select></div>`;
            containerV.appendChild(div);
            const selects = div.querySelectorAll('select');
            selects.forEach(sel => {
                const cat = sel.dataset.categoria;
                const current = sel.value;
                sel.innerHTML = '';
                const opt = document.createElement('option');
                opt.value = '';
                opt.textContent = '(Selecione)';
                sel.appendChild(opt);
                if (categorias[cat]) {
                    categorias[cat].forEach(nome => {
                        const opt2 = document.createElement('option');
                        opt2.value = nome;
                        opt2.textContent = nome;
                        if (nome === current) opt2.selected = true;
                        sel.appendChild(opt2);
                    });
                }
            });
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

    preencherTodosSelects();
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
