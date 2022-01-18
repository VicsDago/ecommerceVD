import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import  ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import itemListContainer from './components/ItemListContainer';

function App() {
  return (
    <header>
    <NavBar/>
<ItemListContainer/>
<ItemList/>
{/* <ItemCount stock={"item.stock"} initial={"1"}/> creo que no hace al funcionamiento, porque ya esta importado en prosucto.jsx*/}
</header>
  );
}


export default App;
