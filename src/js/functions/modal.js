import '../_vars';

function showModal(showButton, showBlock) {
  let modalButton = document.querySelector(showButton),
    modalBlock = document.querySelector(showBlock),
    modalButtonReplace = showButton.replace(/\./g, ''),
    modalBlockReplace = showBlock.replace(/\./g, '');

    modalButton.addEventListener('click', function () {
        let show = () => {
            modalButton.classList.add(`${modalButtonReplace}_active`);
            modalBlock.classList.add(`${modalBlockReplace}_active`);
            document.body.style.overflow = 'hidden';
          },
          hide = () => {
            modalButton.classList.remove(`${modalButtonReplace}_active`);
            modalBlock.classList.remove(`${modalBlockReplace}_active`);
            document.body.style.overflow = '';
          };
  
        if (!modalBlock.classList.contains(`${modalBlockReplace}_active`)) {
          show();
        } else {
          hide();
        }
    })
}

showModal('.burger', '.menu');