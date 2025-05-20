type SlideListProps = {
  children: React.ReactNode;
};

const SlideList: React.FC<SlideListProps> = ({ children }) => {
  return <ul className="space-y-6 ml-12 list-disc">{children}</ul>;
};

export default SlideList;
