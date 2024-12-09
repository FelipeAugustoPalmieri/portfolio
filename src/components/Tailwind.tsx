import * as React from 'react';

export interface IAppProps {
}

const Tailwind = (props: IAppProps) => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hello, Tailwind CSS!</h1>
    </div>
  );
}

export default Tailwind