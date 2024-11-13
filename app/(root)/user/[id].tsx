// // path: lendsqr-fe-test\app\(root)\user\[id].tsx
// import { users } from "@/constants/sampleData";
// import React from "react";

// const UserDetails = ({ params }: { params: { id: string } }) => {
//   const user = users.find((user) => user.id === params.id);

//   if (!user) {
//     return <p>User not found</p>;
//   }

//   return (
//     <div>
//       <h1>{user.username}&apos;s Details</h1>
//       <p><strong>Organization:</strong> {user.organization}</p>
//       <p><strong>Email:</strong> {user.email}</p>
//       <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
//       <p><strong>Date Joined:</strong> {user.formattedDate}</p>
//       <p><strong>Status:</strong> {user.status}</p>
//       {/* Add more user details if needed */}
//     </div>
//   );
// };

// export default UserDetails;

//===
import { users } from "@/constants/sampleData";
import React from "react";

const UserDetails = ({ params }: { params: { id: string } }) => {
  // Find the user based on the ID passed in the URL
  const user = users.find((user) => user.id === params.id);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>{user.username}&apos;s Details</h1>
      <p><strong>Organization:</strong> {user.organization}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
      <p><strong>Date Joined:</strong> {user.formattedDate}</p>
      <p><strong>Status:</strong> {user.status}</p>
      {/* Add more user details if needed */}
    </div>
  );
};

export default UserDetails;
