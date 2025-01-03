type Props = {
  children?: React.ReactNode;
  classNames?: string;
};

const Container = ({ children, classNames }: Props) => {
  return <div className={`container mx-auto p-5 ${classNames}`}>{children}</div>;
};

export default Container;
