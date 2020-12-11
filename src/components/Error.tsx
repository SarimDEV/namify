import React from "react";

interface ErrorProps {
  errorMsg: string;
}

const Error: React.FC<ErrorProps> = (props) => (
  <div className="p-1 px-2 bg-red-400 rounded-md">
    <p className="text-white text-md">{props.errorMsg}</p>
  </div>
);

export default Error;
