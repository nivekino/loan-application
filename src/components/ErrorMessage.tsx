interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div className="text-center text-red-600 mt-8 font-Roboto">
      <h2 className="text-2xl font-bold mb-4 font-Roboto">Algo salio mal!</h2>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
