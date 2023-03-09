import CuadroDos from './CuadroDos';
const CuadroUno = () => {
  const funcionCuadroUno = () => {
    console.log('Dieron click en el cuadro uno');
  };
  return (
    <div
      onClick={funcionCuadroUno}
      style={{ width: '300px', height: '300px', backgroundColor: 'red' }}
    >
      CuadroUno
      <CuadroDos />
    </div>
  );
};

export default CuadroUno;
