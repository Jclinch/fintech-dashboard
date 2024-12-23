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
  const dateObj = typeof date === "string" ? new Date(date) : date;
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
  const totalItems = filteredUsers.length;
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

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
              <td data-label="Organization">{user.organization}</td>
              <td data-label="Username">
                <Link href={`/${user.id}`} passHref>
                  {user.username}
                </Link>
              </td>
              <td data-label="Email">{user.email}</td>
              <td data-label="Phone Number">{user.phoneNumber}</td>
              <td data-label="Date Joined">
                {formatDate(user.dateJoined.toString())}
              </td>
              <td data-label="Status">
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination and Page Info */}
      <div className="pagn-info">
        <div className="pagination-info">
          <span>
            Showing
            <div className="length">{paginatedUsers.length}</div> out of{" "}
            {totalItems}
          </span>
        </div>

        <div className="pagination" style={{ float: "right" }}>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="arrow-button"
          >
            &lt;
          </button>
          {currentPage > 2 && (
            <>
              <button
                onClick={() => handlePageChange(1)}
                className="page-button"
              >
                1
              </button>
              {currentPage > 3 && <span className="ellipsis">...</span>}
            </>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(
              (page) =>
                page === currentPage ||
                page === currentPage - 1 ||
                page === currentPage + 1
            )
            .map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`page-button ${
                  currentPage === page ? "active" : ""
                }`}
              >
                {page}
              </button>
            ))}
          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && (
                <span className="ellipsis">...</span>
              )}
              <button
                onClick={() => handlePageChange(totalPages)}
                className="page-button"
              >
                {totalPages}
              </button>
            </>
          )}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="arrow-button"
          >
            &gt;
          </button>
        </div>
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

export default Home;
