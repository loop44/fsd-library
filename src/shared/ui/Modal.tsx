import Button from './Button';

interface ModalProps {
  title: string;
  text: string;
  onClickYes: () => void;
  onClickNo: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, text, onClickYes, onClickNo }) => (
  <div className="bg-black bg-opacity-30 fixed h-screen w-screen top-0 left-0 flex items-center justify-center">
    <div className="bg-white mx-4 p-7 relative">
      <h1 className="text-2xl mb-5">{title}</h1>
      <p className="text-base mb-5">{text}</p>
      <div className="flex gap-3 justify-end">
        <Button color="blue" text="Yes" size="md" onClick={onClickYes} />
        <Button color="red" text="No" size="md" onClick={onClickNo} />
      </div>
      <button className="absolute right-8 top-8" onClick={onClickNo}>
        <img src="/icons/close.svg" alt="" />
      </button>
    </div>
  </div>
);

export default Modal;
