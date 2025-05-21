interface SlideHeaderProps {
  title: string;
  className?: string;
}

const SlideHeader: React.FC<SlideHeaderProps> = ({ title, className = '' }) => {
  return <h1 className={`header-fancy text-4xl  ${className}`}>{title}</h1>;
};

export default SlideHeader;
