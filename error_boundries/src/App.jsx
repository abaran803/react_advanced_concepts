import "./App.css";
import CounterWithError from "./components/CounterWithError";
import ErrorBoundriesExample from "./components/ErrorBoundries";
import ErrorBoundary from "./ErrorBoundry";

const ComponentWithoutError = () => {
  return <div>Hello! This component is error free</div>;
};

function App() {
  return (
    <div>
      <ComponentWithoutError />
      <ErrorBoundary fallback="Error Occured">
        <ErrorBoundriesExample name="Aman" />
      </ErrorBoundary>
      <ErrorBoundary fallback="Error Occured">
        <CounterWithError />
      </ErrorBoundary>
    </div>
  );
}

export default App;
