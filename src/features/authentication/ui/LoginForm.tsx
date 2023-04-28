import { useState } from 'react';
import Input from 'shared/ui/Input';

const LoginForm = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  return (
    <form className="flex flex-col">
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
    </form>
  );
};

export default LoginForm;
