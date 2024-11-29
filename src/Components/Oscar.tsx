type propsType = {
  children: React.ReactNode;
};

export default function Oscar({ children }: propsType) {
  return <div>{children}</div>;
}
