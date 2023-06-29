// Obtém o elemento do segundo header
var secondHeader = document.getElementById('Header-2');

// Variável para controlar o estado do header
var isHeaderFixed = false;

// Função para verificar a posição da página e atualizar o header
function updateHeaderPosition() {
  // Obtém a posição vertical atual da página
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Verifica se a posição da página é maior que um valor específico (por exemplo, 200 pixels)
  if (scrollTop > 200) {
    // Verifica se o header já está fixo
    if (!isHeaderFixed) {
      // Aplica uma classe de transição suave ao header
      secondHeader.classList.add('transition-class');
      
      // Define a posição fixa no topo
      secondHeader.style.position = 'fixed';
      secondHeader.style.top = '0';

      // Atualiza o estado do header
      isHeaderFixed = true;
    }
  } else {
    // Verifica se o header está fixo
    if (isHeaderFixed) {
      // Remove a classe de transição suave do header
      secondHeader.classList.remove('transition-class');

      // Remove a posição fixa
      secondHeader.style.position = '';
      secondHeader.style.top = '';

      // Atualiza o estado do header
      isHeaderFixed = false;
    }
  }
}

// Registra o evento de rolagem da página
window.addEventListener('scroll', updateHeaderPosition);
