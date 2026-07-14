// ---------- CÂNTICOS (COMPLETO) ----------
const CANTICOS = { ... }; // (mesmo array, não vou repetir por espaço, mas mantenha o original)

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
    console.log('abrirConfig chamada');
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
    // ... (mesma função, sem alterações)
};

window.voltarEdicao = function() {
    // ... (mesma função)
};

// ---------- FUNÇÕES INTERNAS ----------
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

// ... (o restante das funções preencherTodosSelects, preencherPartesSelects, leitura do XML, etc. permanecem iguais, apenas certifique-se de que não estão dentro de um escopo fechado)
