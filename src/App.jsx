import "./App.css";
import Todo from "./components/Todo-List/Todo";
import Comments from "./components/Dynamic-Comments/Comments/Comments";
import Counter from './components/Tashbih-Counter/Counter'
function App() {
  return (
    <>
      <div>
        <Todo />
        <Comments />
        <Counter />
      </div>
    </>
  );
}

export default App;
