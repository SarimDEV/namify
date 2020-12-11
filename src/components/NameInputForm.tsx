import React, { useState, useEffect, useRef } from "react";

interface Props {
  handleSubmit: (name: string, e: React.MouseEvent) => void;
}

const NameInput: React.FC<Props> = (props) => {
  const [name, setName] = useState("");
  const nameInput = useRef<HTMLInputElement>(null);
  useEffect(() => {
    nameInput.current && nameInput.current.focus();
  }, []);

  return (
    <form className="flex items-center flex-row space-x-2">
      <input
        className="border border-transparent rounded-md py-2 px-6 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
        placeholder="Type a name ..."
        ref={nameInput}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        className="bg-purple-300 hover:bg-purple-400 rounded-md py-2 px-6 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        onClick={(e) => props.handleSubmit(name, e)}
      >
        Go
      </button>
    </form>
  );
};

export default NameInput;
