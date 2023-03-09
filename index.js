const handler = true;

const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (handler === true) {
      let suma = 10 + 2;
      resolve(suma);
    } else {
      reject('La promesa tuvo un error');
    }
  }, 3000);
});
// kamdfkmaskdmakimdsadas

promesa
  .then((response) => {
    return response + 4;
  })
  .then((newResponse) => {
    console.log(newResponse + 7);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log('Yo siempre me ejecuto sin importar el resultado');
  });
