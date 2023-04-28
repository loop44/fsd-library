import Button from 'shared/ui/Button';

import './index.scss';

const App = () => (
  <div className="font-encode-sans">
    <Button onClick={() => alert('click')} text="f" size="sm" color="green" />
    <Button onClick={() => alert('click')} text="d" size="sm" color="red" />
    <Button onClick={() => alert('click')} text="i" size="sm" color="blue" />
    <Button onClick={() => alert('click')} text="Add" size="md" color="green" />
    <Button onClick={() => alert('click')} text="Yes" size="md" color="blue" />
    <Button onClick={() => alert('click')} text="No" size="md" color="red" />
    <Button onClick={() => alert('click')} text="Submit" size="lg" color="blue" />
  </div>
);

export default App;
