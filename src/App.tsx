import { Fragment } from 'react';
import './App.css';
import { List } from './components/list/list';
import { Menu } from './components/menu/menu';

function App() {
  return (
    <Fragment>
      <Menu />
      <List />
    </Fragment>
  );
}

export default App;
