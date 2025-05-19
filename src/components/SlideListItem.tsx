type SlideListItemProps = {
  children: React.ReactNode;
};

const SlideListItem: React.FC<SlideListItemProps> = ({ children }) => {
  return <li className="text-3xl">{children}</li>;
};

export default SlideListItem;
