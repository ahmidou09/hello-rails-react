import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomGreeting } from "../redux/actions";

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting);

  useEffect(() => {
    dispatch(getRandomGreeting());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
