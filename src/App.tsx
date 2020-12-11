import React, { useEffect, useState, useRef } from "react";
import NameInputForm from "./components/NameInputForm";
import Card from "./components/Card";
import axios from "axios";
import DataComponent from "./components/DataComponent";
import Error from "./components/Error";

export interface NameInfo {
  age: number;
  count: number;
  name: string;
}
const App: React.FC = () => {
  const [nameInfo, setNameInfo] = useState<NameInfo>({
    age: 0,
    count: 0,
    name: "",
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getData = async (name: string) => {
    setIsLoading(true);
    setError("");
    if (name === "") {
      setError("No name provided");
      return;
    }
    try {
      const response = await axios.get(`https://api.agify.io/?name=${name}`);
      setNameInfo(response.data);
      setIsLoaded(true);
    } catch (err) {
      console.log(err);
      setError("Unable to fetch name information");
      setIsLoaded(false);
    }
    setIsLoading(false);
  };

  const renderHeader = () => (
    <div className="text-xl font-medium text-black">
      How old does your name sound?
    </div>
  );

  const handleSubmit = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    getData(name);
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-gradient-to-r from-purple-400  to-red-500">
      <Card center={true} className="mb-10 bg-white">
        {renderHeader()}
        <NameInputForm handleSubmit={handleSubmit} />
        {error && <Error errorMsg={error} />}
      </Card>
      <Card
        className={`bg-gray-50 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-in-out`}
      >
        <DataComponent data={nameInfo} />
      </Card>
    </div>
  );
};

export default App;
