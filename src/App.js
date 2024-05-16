import Header from './components/common/Header';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';

export default function App() {
  return (
    <div>
      <Header text="React Meme Generator" />
      <LeftSide />
      <RightSide />
    </div>
  );
}
