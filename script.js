const modal = document.getElementById('janelinha-modal')
// Seleciona o elemento modal pelo ID da minha 'janelinha-modal' e armazena na const 'modal'

// Abre o meu modal
function abrirModal() {

    // Qnd essa função for chamada ela vai definir a propriedade do 'display' do modal para 'flex'
    // Isso vai fazer com que o modal apareça na tela, pq então o 'display: none' vai deixá-lo invisível
    modal.style.display = "flex"
}

// Função pra fechar o modal
function fecharModal() {

    // Quando for chamada ela vai definir a propriedade 'display' do modal para 'none', como tava antes
    modal.style.display = "none"
}









