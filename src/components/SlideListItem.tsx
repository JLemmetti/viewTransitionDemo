type SlideListItemProps = {
  children: React.ReactNode;
};

const SlideListItem: React.FC<SlideListItemProps> = ({ children }) => {
  return (
    <li className="text-3xl font-medium text-blue-100 transition-colors duration-200">
      {children}
    </li>
  );
};

export default SlideListItem;
