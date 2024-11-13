// //path: lendsqr-fe-test\app\(root)\page.tsx

"use client";
import React, { useState, useEffect, useRef } from "react";
import "@/components/styles/dashboard.scss";
import { users as sampleUsers } from "@/constants/sampleData";
import Image from "next/image";
import Link from "next/link";
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // For AM/PM
  };
  const dateObj = new Date(date);
  return dateObj.toLocaleString("en-US", options);
};

const ITEMS_PER_PAGE = 9;

const Home = () => {
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    dateJoined: "",
    phoneNumber: "",
    status: "",
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [uniqueOrganizations, setUniqueOrganizations] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filterRef = useRef<HTMLDivElement>(null);

  // Extract unique organizations from sampleUsers
  useEffect(() => {
    const organizations = Array.from(
      new Set(sampleUsers.map((user) => user.organization))
    );
    setUniqueOrganizations(organizations);
  }, []);

  // Handle clicks outside of the filter modal to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setIsFilterOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Filter users with case-insensitive matching and date filtering
  const filteredUsers = sampleUsers.filter((user) =>
    Object.keys(filters).every((key) => {
      const filterValue = filters[key as keyof typeof filters];
      const userValue =
        user[key as keyof typeof user]?.toString().toLowerCase() || "";

      if (key === "dateJoined" && filterValue) {
        // Convert both filter date and user's dateJoined to Date objects and compare
        const filterDate = new Date(filterValue);
        const userDate = new Date(user.dateJoined);

        // Only compare dates (ignore time)
        return userDate.toDateString() === filterDate.toDateString();
      }

      return (
        filterValue === "" || userValue.includes(filterValue.toLowerCase())
      );
    })
  );

  // Paginate filtered users
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // function Pagination({ totalItems, itemsPerPage }) {
  //   const [currentPage, setCurrentPage] = useState(1);
  
  //   const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  //   const handlePreviousPage = () => {
  //     if (currentPage > 1) {
  //       setCurrentPage(currentPage - 1);
  //     }
  //   };
  
  //   const handleNextPage = () => {
  //     if (currentPage < totalPages) {
  //       setCurrentPage(currentPage + 1);
  //     }
  //   };

  //===

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleReset = () => {
    setFilters({
      organization: "",
      username: "",
      email: "",
      dateJoined: "",
      phoneNumber: "",
      status: "",
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="dashboard">
      <h1>Users</h1>
      <div className="stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Image
              src="/icons/user-icon.svg"
              alt="icon1"
              width={40}
              height={40}
              className="user-icon"
            />
          </div>
          <div className="stat-label">USER</div>
          <div className="stat-value">2,453</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Image
              src="/icons/active.png"
              alt="icon1"
              width={40}
              height={40}
              className="user-icon"
            />
          </div>
          <div className="stat-label">Active Users</div>
          <div className="stat-value">2,453</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Image
              src="/icons/w-loan.png"
              alt="icon1"
              width={40}
              height={40}
              className="user-icon"
            />
          </div>
          <div className="stat-label">Users with Loans</div>
          <div className="stat-value">12,453</div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Image
              src="/icons/w-savings.png"
              alt="icon1"
              width={40}
              height={40}
              className="user-icon"
            />
          </div>
          <div className="stat-label">Users with Savings</div>
          <div className="stat-value">102,453</div>
        </div>
      </div>
{/* filter modal added to each table header  */}
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <span className="filter-container" onClick={toggleFilter}>
                Organization
                <Image
                  src="/icons/filter-icon.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </span>
            </th>

            <th>
              <span className="filter-container" onClick={toggleFilter}>
                Username
                <Image
                  src="/icons/filter-icon.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </span>
            </th>
            <th>
              <span className="filter-container" onClick={toggleFilter}>
                Email
                <Image
                  src="/icons/filter-icon.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </span>
            </th>
            <th>
              <span className="filter-container" onClick={toggleFilter}>
                Phone Number
                <Image
                  src="/icons/filter-icon.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </span>
            </th>
            <th>
              <span className="filter-container" onClick={toggleFilter}>
                Date Joined
                <Image
                  src="/icons/filter-icon.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </span>
            </th>
            <th>
              <span className="filter-container" onClick={toggleFilter}>
                Status
                <Image
                  src="/icons/filter-icon.svg"
                  alt="filter"
                  width={16}
                  height={16}
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user, index) => (
            <tr key={index}>
              <td>{user.organization}</td>
              <td>
   <Link href={`/userDetails/${user.id}`} passHref>
   {user.username}
   </Link>
   </td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{formatDate(user.dateJoined)}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={currentPage === i + 1 ? "active" : ""}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {isFilterOpen && (
        <div className="filter-modal">
          <div className="filter-content" ref={filterRef}>
            <h3>Filter Options</h3>
            <label>
              Organization
              <select
                name="organization"
                onChange={handleFilterChange}
                value={filters.organization}
              >
                <option value="">Select</option>
                {uniqueOrganizations.map((org) => (
                  <option key={org} value={org}>
                    {org}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Username
              <input
                type="text"
                name="username"
                placeholder="User"
                onChange={handleFilterChange}
                value={filters.username}
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleFilterChange}
                value={filters.email}
              />
            </label>
            <label>
              Date Joined
              <input
                type="date"
                name="dateJoined"
                onChange={handleFilterChange}
                value={filters.dateJoined}
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                onChange={handleFilterChange}
                value={filters.phoneNumber}
              />
            </label>
            <label>
              Status
              <select
                name="status"
                onChange={handleFilterChange}
                value={filters.status}
              >
                <option value="">Select</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
                <option value="Blacklisted">Blacklisted</option>
                <option value="Active">Active</option>
              </select>
            </label>
            <div className="filter-buttons">
              <button onClick={handleReset} className="reset-button">
                Reset
              </button>
              <button onClick={toggleFilter} className="apply-button">
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// }

export default Home;


// // // =====

// path: lendsqr-fe-test\app\(root)\page.tsx

// path: lendsqr-fe-test\app\(root)\page.tsx

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import "@/components/styles/dashboard.scss";
// import { users as sampleUsers } from "@/constants/sampleData";
// import Image from "next/image";
// import Link from "next/link"; // Import Link component

// const formatDate = (date: string) => {
//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true, // For AM/PM
//   };
//   const dateObj = new Date(date);
//   return dateObj.toLocaleString("en-US", options);
// };

// const ITEMS_PER_PAGE = 9;

// const Home = () => {
//   const [filters, setFilters] = useState({
//     organization: "",
//     username: "",
//     email: "",
//     dateJoined: "",
//     phoneNumber: "",
//     status: "",
//   });
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [uniqueOrganizations, setUniqueOrganizations] = useState<string[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const filterRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const organizations = Array.from(
//       new Set(sampleUsers.map((user) => user.organization))
//     );
//     setUniqueOrganizations(organizations);
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         filterRef.current &&
//         !filterRef.current.contains(event.target as Node)
//       ) {
//         setIsFilterOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleFilterChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({ ...prev, [name]: value }));
//   };

//   const filteredUsers = sampleUsers.filter((user) =>
//     Object.keys(filters).every((key) => {
//       const filterValue = filters[key as keyof typeof filters];
//       const userValue =
//         user[key as keyof typeof user]?.toString().toLowerCase() || "";

//       if (key === "dateJoined" && filterValue) {
//         const filterDate = new Date(filterValue);
//         const userDate = new Date(user.dateJoined);
//         return userDate.toDateString() === filterDate.toDateString();
//       }

//       return (
//         filterValue === "" || userValue.includes(filterValue.toLowerCase())
//       );
//     })
//   );

//   const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
//   const paginatedUsers = filteredUsers.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

//   const handleReset = () => {
//     setFilters({
//       organization: "",
//       username: "",
//       email: "",
//       dateJoined: "",
//       phoneNumber: "",
//       status: "",
//     });
//     setCurrentPage(1);
//   };

//   const handlePageChange = (page: number) => {
//     setCurrentPage(page);
//   };

//   return (
//     <div className="dashboard">
//       <h1>Users</h1>
//       <div className="stats">
//         {/* Stat Cards */}
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Image
//               src="/icons/user-icon.svg"
//               alt="icon1"
//               width={40}
//               height={40}
//               className="user-icon"
//             />
//           </div>
//           <div className="stat-label">USER</div>
//           <div className="stat-value">2,453</div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Image
//               src="/icons/active.png"
//               alt="icon1"
//               width={40}
//               height={40}
//               className="user-icon"
//             />
//           </div>
//           <div className="stat-label">Active Users</div>
//           <div className="stat-value">2,453</div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Image
//               src="/icons/w-loan.png"
//               alt="icon1"
//               width={40}
//               height={40}
//               className="user-icon"
//             />
//           </div>
//           <div className="stat-label">Users with Loans</div>
//           <div className="stat-value">12,453</div>
//         </div>
//         <div className="stat-card">
//           <div className="stat-icon">
//             <Image
//               src="/icons/w-savings.png"
//               alt="icon1"
//               width={40}
//               height={40}
//               className="user-icon"
//             />
//           </div>
//           <div className="stat-label">Users with Savings</div>
//           <div className="stat-value">102,453</div>
//         </div>
//       </div>

//       <table className="user-table">
//         <thead>
//           <tr>
//             <th>Organization</th>
//             <th>Username</th>
//             <th>Email</th>
//             <th>Phone Number</th>
//             <th>Date Joined</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {paginatedUsers.map((user, index) => (
//             <tr key={index}>
//               <td>{user.organization}</td>
//               {/* Link to userDetails page */}
//               <td>
//                 <Link href="./userDetails" passHref>
//                   {user.username}
//                 </Link>
//               </td>
//               <td>{user.email}</td>
//               <td>{user.phoneNumber}</td>
//               <td>{formatDate(user.dateJoined)}</td>
//               <td>
//                 <span className={`status ${user.status.toLowerCase()}`}>
//                   {user.status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, i) => (
//           <button
//             key={i}
//             onClick={() => handlePageChange(i + 1)}
//             className={currentPage === i + 1 ? "active" : ""}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>

//       {isFilterOpen && (
//         <div className="filter-modal">
//           <div className="filter-content" ref={filterRef}>
//             <h3>Filter Options</h3>
//             <label>
//               Organization
//               <select
//                 name="organization"
//                 onChange={handleFilterChange}
//                 value={filters.organization}
//               >
//                 <option value="">Select</option>
//                 {uniqueOrganizations.map((org) => (
//                   <option key={org} value={org}>
//                     {org}
//                   </option>
//                 ))}
//               </select>
//             </label>
//             <label>
//               Username
//               <input
//                 type="text"
//                 name="username"
//                 placeholder="User"
//                 onChange={handleFilterChange}
//                 value={filters.username}
//               />
//             </label>
//             <label>
//               Email
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 onChange={handleFilterChange}
//                 value={filters.email}
//               />
//             </label>
//             <label>
//               Date Joined
//               <input
//                 type="date"
//                 name="dateJoined"
//                 onChange={handleFilterChange}
//                 value={filters.dateJoined}
//               />
//             </label>
//             <label>
//               Phone Number
//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 onChange={handleFilterChange}
//                 value={filters.phoneNumber}
//               />
//             </label>
//             <label>
//               Status
//               <select
//                 name="status"
//                 onChange={handleFilterChange}
//                 value={filters.status}
//               >
//                 <option value="">Select</option>
//                 <option value="Inactive">Inactive</option>
//                 <option value="Pending">Pending</option>
//                 <option value="Blacklisted">Blacklisted</option>
//                 <option value="Active">Active</option>
//               </select>
//             </label>
//             <div className="filter-buttons">
//               <button onClick={handleReset} className="reset-button">
//                 Reset
//               </button>
//               <button onClick={toggleFilter} className="apply-button">
//                 Apply
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;
