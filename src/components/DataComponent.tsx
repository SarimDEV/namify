import React from "react";

const HighlightedText: React.FC<{ label: string | number }> = ({ label }) => (
  <span className="text-purple-500 font-bold">{label}</span>
);

interface NameInfo {
  data: {
    age: number;
    count: number;
    name: string;
  };
}

const DataComponent: React.FC<NameInfo> = (props) => {
  const renderHeader = (label: string) => (
    <div className="text-2xl mb-1 font-medium text-purple-500">{label}</div>
  );

  // 0-10👶 - 11-16🧑 - 17-40👨 - 40-60👴 60+
  const getAgeIcon = () => {
    const age = props.data.age;
    if (age < 10) return "👶";
    else if (age >= 10 && age <= 16) return "🧑";
    else if (age > 16 && age <= 40) return "👨";
    else return "👴";
  };

  return (
    <div>
      {renderHeader(props.data.name)}
      {props.data.age ? (
        <p>
          Your approximate age is <HighlightedText label={props.data.age} />{" "}
          {getAgeIcon()}
        </p>
      ) : (
        <p>Your name is very unique! 👀</p>
      )}
      <p>
        There are approximately <HighlightedText label={props.data.count} />{" "}
        people with the name {props.data.name}
      </p>
    </div>
  );
};

export default DataComponent;
