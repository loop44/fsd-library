import LoginForm from 'features/authentication/ui/LoginForm';
import ErrorAlert from 'features/ErrorAlert';
import { Link } from 'react-router-dom';
import Button from 'shared/ui/Button';

const LoginPage = () => (
  <div className="h-screen flex flex-col justify-center gap-10 px-9">
    <h1 className="text-3xl">Login</h1>
    <LoginForm />
    <Button color="blue" size="lg" text="Submit" />
    <Link to="/register">
      <Button color="darkBlue" size="lg" text="Sign up" />
    </Link>
    <ErrorAlert />
  </div>
);

export default LoginPage;
