interface SlideHeaderProps {
  title: string;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ title }) => {
  return <h1 className="text-6xl mb-14">{title}</h1>;
};

export default SlideHeader;
