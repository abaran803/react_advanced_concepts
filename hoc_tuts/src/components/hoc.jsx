// HOC components takes a component and data and return a new component that contains the original component with some changes

const HOC = (OriginalComponent, data) => {
  const NewComponent = (props) => {
    console.log(data, "data here");
    return (
      <div>
        Hello
        <OriginalComponent {...props} />
      </div>
    );
  };
  return NewComponent;
};

export default HOC;
