import { useRef } from "react";
import ChildRefs from "./ChildRefs";

const ParentRefs = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <ChildRefs ref={inputRef} />
      <button onClick={handleFocus}>Click to Focus</button>
    </div>
  );
};

export default ParentRefs;
