import { useState } from 'react';
import Button from 'shared/ui/Button';
import Input from 'shared/ui/Input';

import './index.scss';

const App = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  return (
    <div className="font-encode-sans">
      <Button onClick={() => alert('click')} text="f" size="sm" color="green" />
      <Button onClick={() => alert('click')} text="d" size="sm" color="red" />
      <Button onClick={() => alert('click')} text="i" size="sm" color="blue" />
      <Button onClick={() => alert('click')} text="Add" size="md" color="green" />
      <Button onClick={() => alert('click')} text="Yes" size="md" color="blue" />
      <Button onClick={() => alert('click')} text="No" size="md" color="red" />
      <Button onClick={() => alert('click')} text="Submit" size="lg" color="blue" />
      <Input
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="Enter your name"
        value={userName}
      />
      <Input
        onChange={(e) => setUserEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        value={userEmail}
      />
      <Input
        onChange={(e) => setUserPass(e.target.value)}
        type="password"
        placeholder="Enter your password"
        value={userPass}
      />
    </div>
  );
};

export default App;
