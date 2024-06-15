type ButtonProps = {
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  variant: 'primary' | 'secondary';
  classname?: string;
  children: React.ReactNode;
};

export default function Button({ type, onClick, variant, classname, children }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`${variant} ${classname}`}>
      {children}
    </button>
  );
}
