import { useState } from 'react';
import Input from 'shared/ui/Input';

const RegisterForm = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  return (
    <form className="flex flex-col">
      <Input
        type="text"
        placeholder="Enter your name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Enter your email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter your password"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Repeat your password"
        value={userPass}
        onChange={(e) => setUserPass(e.target.value)}
      />
    </form>
  );
};

export default RegisterForm;
