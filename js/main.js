
const botonEnviar = document.querySelector('#enviar');

botonEnviar.addEventListener('click', (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const email = document.querySelector('#email').value;
  const cantidad = document.querySelector('#cantidad').value;
  
  Swal.fire({
    title:`Gracias ${nombre}, te llegara a ${email} el cupon de pago, total a pagar $ ${4800*cantidad}`,
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff ',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/assets/img/nyan-cat.gif")
      left top
      no-repeat
    `
  })
});