const local = document.querySelector('span');

function verificarSeVazio(){
    if (document.querySelector('textarea').value.length != 0){
        return document.getElementById('ativar').style.display = 'flex';
    } else{
        return document.getElementById('ativar').style.display = 'none';
    }
}

function copiarTexto(){
    navigator.clipboard.writeText(
        document.querySelector('span').textContent);
}

function criptografarPalavra(){
    let palavra = document.querySelector('textarea').value;
    let palavraReformulada = '';

    for (let i = 0; i < palavra.length; i++){
        switch (palavra[i]) {
            case 'a':
                palavraReformulada += 'kout';
                break;
            case 'e':
                palavraReformulada += 'tkhi';
                break;
            case 'i':
                palavraReformulada += 'pest';
                break;
            case 'o':
                palavraReformulada += 'jaul';
                break;
            case 'u':
                palavraReformulada += 'zygi';
                break;
            default:
                palavraReformulada += palavra[i];
                break;
        }
    }
    verificarSeVazio();
    return local.innerHTML = palavraReformulada;
}

function descriptografarPalavra(){
    let palavra = document.querySelector('textarea').value;

    for (let i = 0; i < palavra.length; i++){
        palavra = palavra.replace('tkhi', 'e');
        palavra = palavra.replace('kout', 'a');
        palavra = palavra.replace('pest', 'i');
        palavra = palavra.replace('zygi', 'u');
        palavra = palavra.replace('jaul', 'o');
    }
    verificarSeVazio();
    return local.innerHTML = palavra;
}
