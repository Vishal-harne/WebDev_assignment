import { atom, useRecoilValue, RecoilRoot } from "recoil";
import './App.css';

const Preatom = atom({
  key: "Preatom",
  default: [
    {
      id: 1,
      title: "Web Development",
      description: "7 to 9",
    },
    {
      id: 2,
      title: "Go to Martial Arts",
      description: "7:30 to 9:30",
    }
  ]
});

function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={2} />   
    </RecoilRoot>
  );
}

function Todo({ id }) {
  const todos = useRecoilValue(Preatom);
  const currentTodo = todos.find(todo => todo.id === id);

  return (
    <div>
      <h3>{currentTodo.title}</h3>
      <p>{currentTodo.description}</p>
    </div>
  );
}

export default App;
