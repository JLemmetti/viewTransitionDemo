type SlideListProps = {
  children: React.ReactNode;
};

const SlideList: React.FC<SlideListProps> = ({ children }) => {
  return (
    <ul className="space-y-3 list-disc ml-12 rounded-xl p-4">{children}</ul>
  );
};

export default SlideList;
