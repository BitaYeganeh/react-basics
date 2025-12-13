import React, { useEffect, useState } from "react";

const Loading = () => {
  //HAVE STATE isLoading that starts as true
  const [isLoading, setIsLoading] = useState(true);

  // after 2sec set isLoading to false only once
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // cleanup
  }, []);

  // if isLoading true show "Loading..."
  if (isLoading) {
    return (
      <div style={{ fontSize: 24, color: "#46063dff", marginLeft: 60 }}>
        Loading...
      </div>
    );
  }
  //after loadng show"Data loaded"
  return (
    <div style={{ fontSize: 24, color: "#68e22fff", marginLeft: 60 }}>
      Data loaded
    </div>
  );
};

export default Loading;
