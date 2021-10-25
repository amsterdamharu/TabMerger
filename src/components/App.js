import React from "react";
import { useDispatch } from "react-redux";
const helloWorld = () => ({ type: 'A' })
export default function App() {
  const dispatch = useDispatch();
  React.useEffect(
    () => dispatch(helloWorld()),
    [dispatch]
  );
  return <div>Hello World</div>;
}
