import Family from "./prop_drill/Family";

const App = () => {
  const familyMessage = {
    familyName: "Invincible",
  };

  return (
    <div>
      <Family message={familyMessage} />
    </div>
  );
};

export default App;
