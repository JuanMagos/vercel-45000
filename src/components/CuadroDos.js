const CuadroDos = () => {
  const funcionCuadroDos = (event) => {
    event.stopPropagation();
    console.log('Dieron click en el cuadro dos');
  };
  return (
    <div
      onClick={funcionCuadroDos}
      style={{ width: '200px', height: '200px', backgroundColor: 'blue' }}
    >
      CuadroDos
    </div>
  );
};

export default CuadroDos;
