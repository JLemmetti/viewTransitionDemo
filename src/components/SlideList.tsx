type SlideListProps = {
  children: React.ReactNode;
};

const SlideList: React.FC<SlideListProps> = ({ children }) => {
  return (
    <ul className="space-y-6 list-disc ml-12 rounded-xl p-6">{children}</ul>
  );
};

export default SlideList;
