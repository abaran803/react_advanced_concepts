import React from "react";

// eslint-disable-next-line react/display-name
const ChildRefs = React.forwardRef((props, ref) => {
  return (
    <div>
      <h4>Child Ref</h4>
      <input ref={ref} />
    </div>
  );
});

export default ChildRefs;
