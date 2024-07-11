type PropsTypes = {
  variant: string;
  message: string;
};

export default function Toaster({ variant, message }: PropsTypes) {
  return (
    <div className="toast">
      <div className={`alert ${variant}`}>
        <span>{message}</span>
      </div>
    </div>
  );
}
