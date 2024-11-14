import Image from "next/image";
import { users } from "../../../constants/sampleData";
import "@/components/styles/userDetails.scss";

export default function Page({ params }: { params: { id: string } }) {
  // Find the user based on the `id` parameter
  const user = users.find((user) => user.id === params.id);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div className="container">
      <div className="header">
        <span>
          <a href="/" className="backLink">
            <Image
              src="/icons/backLink-arrow.png"
              alt="Back Link Arrow"
              width={20}
              height={9}
            />
            Back to Users
          </a>
        </span>

        <div className="status">
          <button className="blacklistButton">BLACKLIST USER</button>
          <button className="activateButton">ACTIVATE USER</button>
        </div>
      </div>

      <h1>User Details</h1>

      <div className="userSummary">
        <div className="userInfo">
          <div className="avatar">
            <Image
              src="/avatars/user-avatar.png"
              alt="User Avatar"
              width={100}
              height={100}
            />
            <div className="name">
              <h2 className="userName">{user.username}</h2>
              <p className="userId">LSQF587g90</p>
            </div>
          </div>
          <div className="tier">
            <p className="userTier">User&apos;s Tier</p>
            <p className="star"> ★★☆☆</p>
          </div>
          <div className="balanceInfo">
            <p className="balance">₦200,000.00</p>
            <p className="accountDetails">9912345678 / Providus Bank</p>
          </div>
        </div>
        <nav className="tabs">
          <a href="#" className="activeTab">
            General Details
          </a>
          <a href="#">Documents</a>
          <a href="#">Bank Details</a>
          <a href="#">Loans</a>
          <a href="#">Savings</a>
          <a href="#">App and System</a>
        </nav>
      </div>

      <div className="userDetails">
        <section className="personal-info">
          <h3>Personal Information</h3>
          <div className="info-grid">
            <div className="info-item">
              <p className="label">FULL NAME</p>
              <p>{user.username}</p>
            </div>
            <div className="info-item">
              <p className="label">PHONE NUMBER</p>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="info-item">
              <p className="label">EMAIL ADDRESS</p>
              <p>{user.email}</p>
            </div>
            <div className="info-item">
              <p className="label">BVN</p>
              <p>{user.phoneNumber}</p>
            </div>
            <div className="info-item">
              <p className="label">GENDER</p>
              <p>{user.gender}</p>
            </div>
            <div className="info-item">
              <p className="label">MARITAL STATUS</p>
              <p>Single</p>
            </div>
            <div className="info-item">
              <p className="label">CHILDREN</p>
              <p>None</p>
            </div>
            <div className="info-item">
              <p className="label">TYPE OF RESIDENT</p>
              <p>Parent&apos;s Apartment</p>
            </div>
          </div>
        </section>

        <section className="edu-info">
          <h3>Education and Employment</h3>
          <div className="info-grid">
            <div className="info-item">
              <p className="label">LEVEL OF EDUCATION</p>
              <p>B.Sc</p>
            </div>
            <div className="info-item">
              <p className="label">EMPLOYMENT STATUS</p>
              <p>Employed</p>
            </div>
            <div className="info-item">
              <p className="label">SECTOR OF EMPLOYMENT</p>
              <p>FinTech</p>
            </div>
            <div className="info-item">
              <p className="label">DURATION OF EMPLOYMENT</p>
              <p>2 years</p>
            </div>
            <div className="info-item">
              <p className="label">OFFICE EMAIL</p>
              <p>{user.email}</p>
            </div>
            <div className="info-item">
              <p className="label">MONTHLY INCOME</p>
              <p>₦200,000.00 - ₦400,000.00</p>
            </div>
            <div className="info-item">
              <p className="label">LOAN REPAY</p>
              <p>40,000</p>
            </div>
          </div>
        </section>

        <section className="social-info">
          <h3>Socials</h3>
          <div className="info-grid">
            <div className="info-item">
              <p className="label">TWITTER</p>
              <p>@grace_effiom</p>
            </div>
            <div className="info-item">
              <p className="label">FACEBOOK</p>
              <p>{user.username}</p>
            </div>
            <div className="info-item">
              <p className="label">INSTAGRAM</p>
              <p>@grace_effiom</p>
            </div>
          </div>
        </section>

        <section className="guarantor-info">
          <h3>Guarantor</h3>
          <div className="info-grid">
            <div className="info-item">
              <p className="label">FULL NAME</p>
              <p>Debby Ogana</p>
            </div>
            <div className="info-item">
              <p className="label">PHONE NUMBER</p>
              <p>07067809922</p>
            </div>
            <div className="info-item">
              <p className="label">EMAIL ADDRESS</p>
              <p>debby@gmail.com</p>
            </div>
            <div className="info-item">
              <p className="label">RELATIONSHIP</p>
              <p>Sister</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
