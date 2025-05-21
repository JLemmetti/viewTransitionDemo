import React from 'react';

interface CodeExampleProps {
  children: string;
  className?: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ children, className }) => {
  return (
    <pre
      className={`bg-gradient-to-br from-gray-900 via-blue-950 to-purple-900 py-4 px-8 rounded-2xl overflow-auto self-center shadow-xl border border-blue-900/20 ${className}`}
    >
      <code className="text-xl text-blue-200 font-mono">{children}</code>
    </pre>
  );
};

export default CodeExample;
