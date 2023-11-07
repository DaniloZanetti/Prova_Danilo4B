import './App.css';
import Imagem from './img/presidas_corinthians.jpg';
import ImagemPerfil from './img/çauan.jpg';
import Post from './components/post';
import Comentarios from './components/comentarios';

function App() {
  return (
    <div className="App">
      <h1>Blog sobre o Corinthians</h1>
      <Post
      titulo="Eleições Presidenciais no Corinthians"
      imagem={Imagem}
      descricao="O 32º presidente da história do Corinthians será conhecido daqui a dois meses. 
      A próxima eleição do clube está marcada para 25 de novembro, quando os sócios do Timão também irão escolher 200 conselheiros trienais."
      categoria="Categoria: Futebol"
      />
      <h2>Comentarios:</h2>
      <Comentarios
      imagemperfil={ImagemPerfil}
      nome="Çauan Lindo: "
      comentario="O André Luiz tem cara de ser muito legal"
      />


    </div>
  );
}

export default App;
