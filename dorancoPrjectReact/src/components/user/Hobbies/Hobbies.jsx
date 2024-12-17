const Hobbies = () => {
  const hobbies = ["Reading", "Coding", "Traveling"];

  return (
    <div>
      <h3>Hobbies</h3>
      <ul>
        {hobbies.map((hobby, index) => (
          <p key={index}>{hobby}</p>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
