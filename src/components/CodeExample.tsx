import React from 'react';

interface CodeExampleProps {
  children: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ children }) => {
  return (
    <pre className="bg-gray-900 p-4 rounded-md overflow-auto">
      <code className="text-md">{children}</code>
    </pre>
  );
};

export default CodeExample;
