// ---------- CÂNTICOS (COMPLETO) ----------
const CANTICOS = {
    1:"As qualidades de Jeová",2:"Teu nome é Jeová",3:"Jeová, minha força e esperança",4:"“Jeová é o meu Pastor”",5:"As obras maravilhosas de Deus",6:"Os céus declaram a glória de Deus",7:"Jeová, nossa força e poder",8:"Jeová é um refúgio",9:"Jeová é nosso Rei!",10:"A Jeová vou agradecer!",11:"A criação dá glória a Jeová",12:"Nosso grandioso Deus, Jeová",13:"Cristo, o nosso exemplo",14:"O novo Rei da Terra",15:"Louve o Filho de Jeová!",16:"Jeová escolheu nosso Rei",17:"“Eu quero!”",18:"Obrigado pelo resgate!",19:"A Ceia do Senhor",20:"Jeová nos deu o seu melhor",21:"Vou buscar primeiro o Reino",22:"Que venha o Reino de Deus!",23:"Jeová começou a reinar!",24:"Venham para o monte de Jeová!",25:"Os filhos ungidos de Jeová",26:"“Se fez por meus irmãos, você fez por mim”",27:"A vitória dos filhos de Deus",28:"Quem pode ser amigo de Jeová?",29:"Que nossa vida dê honra ao teu nome!",30:"Meu Deus, meu Amigo e Pai",31:"Ande com Deus",32:"Escolha o lado de Jeová!",33:"Deixe Jeová levar seus fardos",34:"Andarei em integridade",35:"O que é mais importante",36:"Proteja o coração",37:"Amo a Jeová de todo o coração",38:"Jeová vai te dar força",39:"Um bom nome",40:"Você já decidiu?",41:"Escuta minha oração",42:"Minha oração a Jeová",43:"Uma oração de agradecimento",44:"Oração de um servo aflito",45:"Os pensamentos do meu coração",46:"Obrigado, Jeová!",47:"Sempre a Deus vou orar",48:"Caminhamos sempre com Jeová",49:"Como alegrar a Jeová",50:"Minha oração de dedicação",51:"Dedicamos nossa vida a Jeová",52:"Nossa dedicação",53:"Pronto para pregar",54:"“Este é o caminho”",55:"Nada temam, meus amados!",56:"Faça da verdade a sua vida",57:"Pregue a todo tipo de pessoas",58:"Procuramos os amigos da paz",59:"Vamos louvar a Jeová!",60:"A mensagem de vida",61:"Avancem, Testemunhas!",62:"O novo cântico",63:"Somos Testemunhas de Jeová!",64:"Participamos com alegria na colheita",65:"Confiantes, nós vamos continuar!",66:"Vamos declarar as boas novas",67:"“Pregue a palavra”",68:"Plantando a semente do Reino",69:"Continue pregando!",70:"Procurem os merecedores",71:"Marchamos com Jeová",72:"Pregar as verdades do Reino",73:"Dá-nos coragem",74:"A canção do Reino",75:"‘Estou aqui!’",76:"Um sentimento especial",77:"Luz num mundo sombrio",78:"Ensine a verdade com amor",79:"Ensine-os a se manter firmes",80:"“Provem e vejam que Jeová é bom”",81:"A vida de um pioneiro",82:"‘Deixe a luz brilhar’",83:"“De casa em casa”",84:"Vamos fazer nosso melhor",85:"Sejam bem-vindos!",86:"As reuniões são o nosso lugar",87:"As reuniões nos encorajam",88:"Os teus caminhos quero entender",89:"Escute, obedeça e seja abençoado",90:"“Encorajando uns aos outros”",91:"Construímos com amor",92:"Um lugar que leva teu nome",93:"Abençoa nossas reuniões",94:"Muito obrigado pela Bíblia",95:"A luz clareia mais e mais",96:"O livro de Deus é um tesouro",97:"A Palavra de Deus nos ajuda a viver",98:"A Bíblia, um presente de Deus",99:"Muitos irmãos ao meu lado",100:"Vamos ser hospitaleiros!",101:"Servimos a Jeová em união",102:"Ajude os que estão fracos",103:"Os anciãos são um presente de Jeová",104:"Espírito santo — um presente de Deus",105:"“Deus é amor”",106:"Amor — a qualidade que é sem igual",107:"Jeová — o exemplo perfeito de amor",108:"O amor leal de Jeová",109:"Mostre amor de coração",110:"“A alegria que vem de Jeová”",111:"Nossos motivos de alegria",112:"Jeová, Deus de paz",113:"A paz que vem de Deus",114:"Seja paciente",115:"A paciência de Deus é salvação",116:"A força da bondade",117:"A qualidade da bondade",118:"Jeová, a ti pedimos mais fé",119:"Temos que ter fé",120:"Seja humilde como Jesus",121:"Precisamos ter autodomínio",122:"Vamos continuar firmes!",123:"Obedecemos a Jeová e à sua organização",124:"Sempre leais",125:"“Felizes os misericordiosos”",126:"Sempre fortes, firmes e despertos",127:"Que tipo de pessoa eu devo ser",128:"Persevere até o fim",129:"Eu vou perseverar",130:"Vamos perdoar uns aos outros",131:"O que Jeová uniu",132:"Nós somos um",133:"Quero ser um jovem leal",134:"Os filhos são uma herança de Deus",135:"“Seja sábio, meu filho”",136:"Jeová o recompensará",137:"Mulheres fiéis",138:"A beleza dos cabelos brancos",139:"Imagine a si mesmo no Paraíso",140:"Vida eterna, enfim!",141:"O milagre da vida",142:"A esperança que nos dá coragem",143:"Continue ativo e desperto!",144:"Olhe para as bênçãos!",145:"Deus prometeu um paraíso",146:"“Estou fazendo novas todas as coisas”",147:"A vida eterna — que bela promessa!",148:"Jeová é nosso Salvador",149:"Um cântico de vitória",150:"Busquem a Deus para obter livramento",151:"Ele chamará",152:"Um lugar para teu louvor",153:"Jeová, me dá coragem",154:"Eterno amor",155:"Nossa alegria eterna",156:"Olhar com fé",157:"Paz, enfim!",158:"‘Não vai se atrasar!’",159:"Toda a glória vou te dar",160:"As boas novas sobre Jesus",161:"Fazer tua vontade é o meu prazer",162:"Preciso de ti",163:"Felizes são esses olhos"
};

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

// Carrega do localStorage
function carregarCategorias() {
    const stored = localStorage.getItem('categoriasIrmãos');
    if (stored) {
        categorias = JSON.parse(stored);
    } else {
        // Categorias padrão (vazias)
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

// ---------- GERENCIAMENTO DO MODAL ----------
function abrirConfig() {
    document.getElementById('configModal').classList.add('active');
    renderizarCategoriasUI();
    preencherSelectImport();
}

function fecharConfig() {
    document.getElementById('configModal').classList.remove('active');
}

function adicionarCategoria() {
    const input = document.getElementById('novaCategoria');
    const cat = input.value.trim();
    if (cat && !categorias[cat]) {
        categorias[cat] = [];
        salvarCategorias();
        input.value = '';
    }
}

function removerCategoria(cat) {
    if (confirm(`Remover categoria "${cat}" e todos os seus nomes?`)) {
        delete categorias[cat];
        salvarCategorias();
    }
}

function adicionarNome(cat) {
    const input = document.getElementById(`novoNome_${cat}`);
    const nome = input.value.trim();
    if (nome && !categorias[cat].includes(nome)) {
        categorias[cat].push(nome);
        salvarCategorias();
        input.value = '';
    }
}

function removerNome(cat, nome) {
    categorias[cat] = categorias[cat].filter(n => n !== nome);
    salvarCategorias();
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

// Preencher o select de importação com as categorias existentes
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

// Importar nomes a partir do textarea
function importarNomes() {
    const cat = document.getElementById('importCategoria').value;
    if (!cat) {
        alert('Selecione uma categoria.');
        return;
    }
    const text = document.getElementById('importTextarea').value;
    // Divide por quebras de linha (suporta \n e \r\n)
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
}

// ---------- POPULAR SELECTS DE ACORDO COM A CATEGORIA ----------
function preencherTodosSelects() {
    // Preenche selects fixos que têm data-categoria
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
    // ---- TESOUROS (itens comuns) ----
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

    // ---- JOIAS e LEITURA ----
    // Adiciona Joias e Leitura diretamente no container de Tesouros (ou como divs separadas)
    const containerT2 = document.getElementById('tesourosForm');
    if (containerT2) {
        // JOIAS
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
        // LEITURA DA BÍBLIA
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

    // ---- MINISTÉRIO ----
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

        // DISCURSO
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

    // ---- VIDA CRISTÃ ----
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

        // EBC
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

// ---------- GERAR VISUALIZAÇÃO ----------
function gerarVisualizacao() {
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
}

function voltarEdicao() {
    document.getElementById('headerTitulo').style.display = 'block';
    document.getElementById('finalMode').style.display = 'none';
    document.getElementById('editMode').style.display = 'block';
}

// ---------- INICIALIZAÇÃO ----------
carregarCategorias();
