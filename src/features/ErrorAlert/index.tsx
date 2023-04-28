import { useAppDispatch } from 'app/store';
import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import { removeError, selectError } from './model/slice';

const ErrorAlert: React.FC = () => {
  const dispatch = useAppDispatch();
  const error = useSelector(selectError);

  return (
    <button
      className={`w-screen left-0 px-5 mx-auto cursor-pointer fixed transition-all duration-300 ${
        error ? 'top-4' : '-top-full'
      }`}
      onClick={() => dispatch(removeError())}
    >
      <div className="flex bg-fsd-red text-white text-xs items-center gap-1 p-2">
        <img src="/icons/alert.svg" alt="" />
        <p>{error}</p>
      </div>
    </button>
  );
};

export default ErrorAlert;
