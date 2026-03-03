const saudacaoElemento = document.getElementById('saudacao');
const hora = new Date().getHours();

if (hora < 12) {
    saudacaoElemento.innerText = "Bom dia! A luz solar do leste traz energia ao Lumear.";
} else if (hora < 18) {
    saudacaoElemento.innerText = "Boa tarde! O equilíbrio térmico é essencial no Vastu.";
} else {
    saudacaoElemento.innerText = "Boa noite! O repouso em um espaço harmônico renova a alma.";
}

console.log("Script Lumear carregado com sucesso.");
