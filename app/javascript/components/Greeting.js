import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetingsAsync } from "../redux/greetingSlice";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getGreetingsAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>test</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
