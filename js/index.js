
function iniciaModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            (e.target.id == modalId || e.target.className == "fechar") ? fecharModal(modal) : false;
        })
    }
}

function fecharModal(modal) {
    modal.classList.remove('mostrar');
}

const button = document.getElementById('submit');
button.addEventListener('click', () => iniciaModal('modal'));
