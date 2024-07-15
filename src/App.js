import React, { useState, useEffect } from "react";
import BlockList from "./BlockList";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://asatryanhov.github.io/web-dev-tools-data/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log(data);

  return (
    <div>
      {data && (
        <>
          <BlockList data={data} blockName="codeEditors" title="Code Editors" />
          <BlockList
            data={data}
            blockName="optimization"
            title="Optimization"
          />
          <BlockList data={data} blockName="tools" title="Tools" />
          <BlockList data={data} blockName="js-tools" title="JS tools" />
          <BlockList data={data} blockName="css-tools" title="CSS tools" />
          <BlockList
            data={data}
            blockName="google-tools"
            title="Google tools"
          />
          <BlockList
            data={data}
            blockName="cheat-sheet-websites"
            title="Cheat Sheet websites"
          />
          <BlockList
            data={data}
            blockName="learn-english"
            title="Learn English"
          />
        </>
      )}
    </div>
  );
}

export default App;
