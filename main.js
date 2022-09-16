const form = document.getElementById('form-contato');
const pessoas = [];
const numeros = [];

let newLine = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaContato();
    insereContato();
    somaContatos();
    calculaContatos();
});

function adicionaContato() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if (pessoas.includes(inputNomeContato.value) || numeros.includes(inputNomeContato.value)) {
        alert('Nome ou número já cadastrados.');
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
    const total = document.querySelector('tfoot');

    corpoAgenda.innerHTML = newLine;
}

function somaContatos() {
    const soma = calculaContatos();

    document.getElementById('soma-contatos').innerHTML = soma;

}

function calculaContatos() {
    let totalContatos = 0;

    for(let i = 0; i < numeros.length; i++) {
        totalContatos += numeros[i];
    }

    return totalContatos;
}
console.log(form)

