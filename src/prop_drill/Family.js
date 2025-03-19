import Parent from "./Parent";

// const Family = ({ message }) => {
//   console.log(message);
//   return (
//     <div>
//       <Parent message={message} />
//     </div>
//   );
// };

// export default Family;

const Family = ({ message }) => {
  return (
    <div>
      <Parent message={message} />
    </div>
  );
};

export default Family;
