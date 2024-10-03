import LatestArticlesList from './components/LatestArticlesList';
import MainArticle from './components/MainArticle';
import data from './data/data.json';

function App() {
  return (
    <main className="w-full p-8 md:p-16 lg:p-32 max-w-[1528px] flex flex-col gap-6 md:gap-16 lg:gap-32">
      <MainArticle {...data.answerBodyNeeds} />
      <LatestArticlesList {...data.latestArticles} />
    </main>
  );
}

export default App;
