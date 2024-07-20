type PropsTypes = {
  variant: string;
  message: string;
};

export default function Toaster({ variant, message }: PropsTypes) {
  return (
    <div className="toast z-50">
      <div className={`alert ${variant}`}>
        <span className="text-white">{message}</span>
      </div>
    </div>
  );
}
