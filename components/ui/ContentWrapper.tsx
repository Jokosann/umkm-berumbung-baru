type PropsTypes = {
  children: React.ReactNode;
};

export default function ContentWrapper({ children }: PropsTypes) {
  return <div className="max-w-6xl w-full mx-auto px-2 md:px-8">{children}</div>;
}
