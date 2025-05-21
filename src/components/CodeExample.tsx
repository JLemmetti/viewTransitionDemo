import React from 'react';

interface CodeExampleProps {
  children: string;
  className?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ children, className }) => {
  return (
    <pre
      className={`bg-gray-900 py-4 px-6 rounded-md overflow-auto self-center ${className}`}
    >
      <code className="text-xl">{children}</code>
    </pre>
  );
};

export default CodeExample;
