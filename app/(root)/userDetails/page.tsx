// components/userDetails.js
import '@/components/styles/userDetails.scss';
import Image from 'next/image';

const UserDetails = () => {
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

        <div className='status'>

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
            </div>
          <div className='name'>
            <h2 className="userName">Grace Effiom</h2>
            <p className="userId">LSQF587g90</p>
          </div>
          <div className='tier'>
            <p className="userTier">User’s Tier</p>
            <p className='star'> ★★☆☆</p>
          </div>
          <div className="balanceInfo">
            <p className="balance">₦200,000.00</p>
            <p className="accountDetails">9912345678 / Providus Bank</p>
          </div>
        </div>
        <nav className="tabs">
          <a href="#" className="activeTab">General Details</a>
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
      <p>Grace Effiom</p>
    </div>
    <div className="info-item">
      <p className="label">Phone Number</p>
      <p>07060780922</p>
    </div>
    <div className="info-item">
      <p className="label">Email Address</p>
      <p>grace@gmail.com</p>
    </div>
    <div className="info-item">
      <p className="label">BVN</p>
      <p>07060780922</p>
    </div>
    <div className="info-item">
      <p className="label">Gender</p>
      <p>Female</p>
    </div>
    <div className="info-item">
      <p className="label">Marital Status</p>
      <p>Single</p>
    </div>
    <div className="info-item">
      <p className="label">Children</p>
      <p>None</p>
    </div>
    <div className="info-item">
      <p className="label">Type of Residence</p>
      <p>Parent's Apartment</p>
    </div>
  </div>
</section>


        <section>
          <h3>Education and Employment</h3>
          <p>Level of Education: B.Sc</p>
          <p>Employment Status: Employed</p>
          <p>Sector of Employment: Fintech</p>
          <p>Duration of Employment: 2 years</p>
          <p>Office Email: grace@landpay.com</p>
          <p>Monthly Income: ₦200,000.00 - ₦400,000.00</p>
          <p>Loan Repayment: 40,000</p>
        </section>

        <section>
          <h3>Socials</h3>
          <p>Twitter: @grace_effiom</p>
          <p>Facebook: Grace Effiom</p>
          <p>Instagram: @grace_effiom</p>
        </section>

        <section>
          <h3>Guarantor</h3>
          <p>Full Name: Debby Ogana</p>
          <p>Phone Number: 07067809922</p>
          <p>Email Address: debby@gmail.com</p>
          <p>Relationship: Sister</p>
        </section>
      </div>
    </div>
  );
};

export default UserDetails;
