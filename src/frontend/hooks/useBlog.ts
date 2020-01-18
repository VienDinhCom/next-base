import { useState, useEffect } from "react";

export function useBlog() {
  const [state, setstate] = useState("initialState");

  useEffect(() => {
    setstate("newState");

    return () => {
      // Cleanup
    };
  }, [state]);

  return state;
}
