import Granddaughter from "./Granddaughter";
import Grandson from "./Grandson";

const Child = ({ message }) => {
  return (
    <div>
      <h1>Child {message.familyName}</h1>
      <Grandson message={message} />
      <Granddaughter message={message} />
    </div>
  );
};

export default Child;
