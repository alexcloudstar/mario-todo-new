import { AddTodo, Container, List, Modal, Navigation } from './components';

const App = () => {
  return (
    <div className='App'>
      <Modal />
      <Navigation />
      <Container>
        <>
          <AddTodo />
          <List />
        </>
      </Container>
    </div>
  );
};

export default App;
