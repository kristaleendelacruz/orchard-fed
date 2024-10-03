import MainArticle from './components/MainArticle';
import data from './data/data.json';

function App() {
  return (
    <main className="w-full p-8 md:p-16">
      <MainArticle {...data.answerBodyNeeds} />
    </main>
  );
}

export default App;
