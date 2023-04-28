import React from 'react';

interface ErrorAlertProps {
  text: string;
  visible: boolean;
}

const ErrorAlert: React.FC<ErrorAlertProps> = ({ text, visible }) => (
  <div
    className={`w-screen left-0 px-5 mx-auto cursor-pointer fixed transition-all duration-300 ${
      visible ? 'top-4' : '-top-full'
    }`}
  >
    <div className="flex bg-fsd-red text-white text-xs items-center gap-1 p-2">
      <img src="/icons/alert.svg" alt="" />
      <p>{text}</p>
    </div>
  </div>
);

export default ErrorAlert;
