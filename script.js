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

// Efeito de Revelação ao Rolar a Página
const observarScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(secao => {
    observarScroll.observe(secao);
});
