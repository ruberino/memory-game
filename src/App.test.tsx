import { render, screen } from '@testing-library/react';
import App from './App';
import Victory from './components/victory/VictoryScreen';

//App
test('renders memory game headline', () => {
  render(<App />);
  const linkElement = screen.getByText(/MEMORY GAME/i);
  expect(linkElement).toBeInTheDocument();
});


//Victory screen
test('renders victory headline', () => {
  render(<Victory restart={()=>{}} time={''} />);
  const linkElement = screen.getByText(/Gratulerer!/i);
  expect(linkElement).toBeInTheDocument();
});


test('renders time from props', () => {
  const time = '20';
  render(<Victory restart={()=>{}} time={time} />);
  const linkElement = screen.getByText(/Du klarte spillet på 20 sekunder!/i);
  expect(linkElement).toBeInTheDocument();
});