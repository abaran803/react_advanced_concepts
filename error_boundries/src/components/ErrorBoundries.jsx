const ErrorBoundriesExample = (props) => {
  if (props.name !== "Ayush") {
    throw new Error("Wrong Name");
  }
  return <div>{props.name}</div>;
};

export default ErrorBoundriesExample;
