import { AddTodo, Container, List, Navigation } from './components';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Container>
        <>
          <AddTodo />
          <List />
        </>
      </Container>
    </div>
  );
}

export default App;
