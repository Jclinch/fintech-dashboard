// path: lendsqr-fe-test\app\(root)\UserDetails.tsx

import React from 'react';
import { useRouter } from 'next/router'; // To access query params (optional)

// Assuming you're using a dynamic route or passing data from the table via URL
const UserDetails = () => {
  const router = useRouter();
  const { username } = router.query; // Assuming you pass username as a query parameter

  // Dummy data for demonstration (replace with actual data fetching logic)
  const user = {
    username: "john_doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    organization: "Example Org",
    status: "Active",
    dateJoined: "2024-01-01",
  };

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
      <p><strong>Organization:</strong> {user.organization}</p>
      <p><strong>Status:</strong> {user.status}</p>
      <p><strong>Date Joined:</strong> {user.dateJoined}</p>
    </div>
  );
}

export default UserDetails;
