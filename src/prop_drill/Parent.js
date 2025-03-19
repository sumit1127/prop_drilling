import Child from "./Child";

const Parent = ({ message }) => {
  console.log(message);
  return (
    <div>
      <h1>Parent {message.familyName}</h1>
      <Child message={message} />
    </div>
  );
};

export default Parent;
