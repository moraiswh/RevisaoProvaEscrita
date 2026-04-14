function alterarNome() {
    let trocarNome = document.getElementById('inputNome').value;

    if (trocarNome === "") {
        alert('digite um nome')
    } else {
        document.getElementById('nomeUsuario').innerHTML = trocarNome;
    }
}