import FullName from "./FullName/FullName";
import Hobbies from "./Hobbies/Hobbies";

export default function User() {
  return (
    <div>
      <h2>User Information</h2>
      <FullName />
      <Hobbies />
    </div>
  );
}
