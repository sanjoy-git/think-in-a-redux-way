import Button from './Button';
import Count from './Count';

export default function Counter({ id, count, inc, dec }) {
  return (
    <div className="text-center">
      <Count count={count} />
      <Button handler={() => inc(id)}>Inc</Button>
      <Button handler={() => dec(id)}>Dec</Button>
    </div>
  );
}
