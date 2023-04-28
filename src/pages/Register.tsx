import RegisterForm from 'features/authentication/ui/RegisterForm';
import ErrorAlert from 'features/ErrorAlert';
import { Link } from 'react-router-dom';
import Button from 'shared/ui/Button';

const RegisterPage = () => (
  <div className="h-screen flex flex-col justify-center gap-10 px-9">
    <h1 className="text-3xl">Registration</h1>
    <RegisterForm />
    <Button color="blue" size="lg" text="Submit" />
    <Link to="/login">
      <Button color="darkBlue" size="lg" text="Login" />
    </Link>
    <ErrorAlert />
  </div>
);

export default RegisterPage;
