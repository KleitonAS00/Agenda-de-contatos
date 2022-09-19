const form = document.getElementById('form-contato');
const pessoas = [];
const numeros = [];
const inputNomeContato = document.getElementById('nome-contato');
const inputNumeroContato = document.getElementById('numero-contato');

let newLine = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    insereContato();
});

function adicionaContato() {
    
    if (pessoas.includes(inputNomeContato.value)) {
        alert(`${inputNomeContato.value} já existe na agenda`);
    } else {
        pessoas.push(inputNomeContato.value);
        numeros.push(parseFloat(inputNumeroContato.value));
    
        let add = '<tr>';

        add += `<td>${inputNomeContato.value}</td>`;
        add += `<td>${inputNumeroContato.value}</td>`;
        add += `</tr>`;

        newLine += add;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function insereContato() {
    const corpoAgenda = document.querySelector('tbody');

    corpoAgenda.innerHTML = newLine;
}
