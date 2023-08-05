import './App.css';
import { Random } from './components/Random';
import { Tag } from './components/Tag';


function App() {
  return (
    <div className="bg-blue-500 w-[100vw] h-full relative items-center flex flex-col">
      <h1 className='w-11/12 bg-slate-100 py-2 font-bold text-center mt-10 border rounded-lg text-2xl'>Random Gifs</h1>
      <Random></Random>
      <Tag></Tag>
    </div>
  );
}

export default App;
