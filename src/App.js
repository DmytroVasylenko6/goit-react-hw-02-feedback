import Feedback from './components/Feedback';

function App() {
  return (
    <>
      <Feedback state={{ good: 0, neutral: 0, bad: 0 }} />
    </>
  );
}

export default App;
