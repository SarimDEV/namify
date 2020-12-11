import React from "react";

interface Props {
  children: React.ReactNode;
  center?: boolean;
  className?: string;
}

const MainCard: React.FC<Props> = (props) => {
  const className = `p-10 max-w-md mx-auto ${props.className} ${
    props.center ? "items-center" : null
  } rounded-xl shadow-md flex flex-col  space-y-6`;
  return <div className={className}>{props.children}</div>;
};

export default MainCard;
