import FullName from "./FullName/FullName";
import Hobbies from "./Hobbies/Hobbies";

const User = () => {
  return (
    <div>
      <h2>User Information</h2>
      <FullName />
      <Hobbies />
    </div>
  );
};

export default User;
