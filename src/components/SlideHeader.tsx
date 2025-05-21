interface SlideHeaderProps {
  title: string;
  className?: string;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ title, className = '' }) => {
  return <h1 className={`text-6xl mb-14 ${className}`}>{title}</h1>;
};

export default SlideHeader;
