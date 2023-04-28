import LoginForm from 'features/authentication/ui/LoginForm';
import ErrorAlert from 'features/ErrorAlert';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/ui/Button';

const LoginPage = () => {
  const [error, setError] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center gap-10 px-9">
      <h1 className="text-3xl">Login</h1>
      <LoginForm />
      <Button color="blue" size="lg" text="Submit" onClick={() => setError(true)} />
      <Link to="/register">
        <Button color="darkBlue" size="lg" text="Sign up" />
      </Link>
      <ErrorAlert text="Registration error" visible={error} />
    </div>
  );
};

export default LoginPage;
