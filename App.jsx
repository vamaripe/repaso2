import './App.css'

function App() {
  const isLoggedIn = true;
  let content;

  const pro1 = "Col";
  const pro2 = "Ajo";
  const pro3 = "Manzana";

  const productsvariables = [pro1, pro2, pro3]

  const productsobjetos = [
    {title: "Col", isFruit: false, id:1},
    {title: "Ajo", isFruit: false, id:2},
    {title: "Manzana", isFruit: true, id:3}
  ]

  if (isLoggedIn) {
    content = <p>Bienvenido, usuario!</p>;
  } else {
    content = <p>Por favor, inicia sesión.</p>;
  }

  const listItems = productsobjetos.map(product => 
    <li 
    key={product.id}
    style={{
      color: product.isFruit ? 'red' : 'green'
    }}
    >
    {product.title}
    </li>
  );

  return (
    <div>
      <h1>Renderizado condicional</h1>
      {content}
      
      {isLoggedIn ? (
        <p>¡Tienes acceso a contenido exclusivo!</p>
      ) : (
        <p>No tienes acceso a contenido exclusivo.</p>
      )}

      {isLoggedIn && <p>¡Disfruta de tu experiencia!</p>}

      <h1>Renderizado de listas</h1>
      <p>products[0]: {productsvariables[0]}</p>
      <p>products[1]: {productsvariables[1]}</p>
      <p>products[2]: {productsvariables[2]}</p>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default App
