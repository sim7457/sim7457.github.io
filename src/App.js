import React, { useState, useEffect } from "react";
import LoadingBar from "./LoadingBar";
import Fullpage_main from "./Fullpage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <LoadingBar isLoading={isLoading} setIsLoading={setIsLoading} />
      ) : (
        <Fullpage_main />
      )}
    </div>
  );
};

export default App;
