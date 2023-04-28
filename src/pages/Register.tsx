import RegisterForm from 'features/authentication/ui/RegisterForm';
import ErrorAlert from 'features/ErrorAlert';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'shared/ui/Button';

const RegisterPage = () => {
  const [error, setError] = useState(false);

  return (
    <div className="h-screen flex flex-col justify-center gap-10 px-9">
      <h1 className="text-3xl">Registration</h1>
      <RegisterForm />
      <Button color="blue" size="lg" text="Submit" onClick={() => setError(true)} />
      <Link to="/login">
        <Button color="darkBlue" size="lg" text="Login" />
      </Link>
      <ErrorAlert text="Registration error" visible={error} />
    </div>
  );
};

export default RegisterPage;
