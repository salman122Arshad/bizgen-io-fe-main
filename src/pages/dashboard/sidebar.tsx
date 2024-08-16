import Link from 'next/link';
import Image from 'next/image';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <Image src="/logo.png" alt="Genboard Logo" width={50} height={50} />
        <span className="version">Version 1.0.0</span>
      </div>
      <nav className="nav">
        <Link href="/dashboard">
          <a className="nav-item">Dashboard</a>
        </Link>
        <Link href="/campaigns">
          <a className="nav-item">Campaigns</a>
        </Link>
        <Link href="/calendar">
          <a className="nav-item">Calendar</a>
        </Link>
        <Link href="/logout">
          <a className="nav-item">Log Out</a>
        </Link>
      </nav>
      <div className="profile">
        <Image src="/profile-pic.png" alt="Profile Picture" width={40} height={40} className="profile-pic" />
        <div className="profile-details">
          <span>SALMAN ARSHAD</span>
          <span>salmanarshad7815@gmail.com</span>
        </div>
      </div>
      <div className="plan">
        <div className="plan-usage">
          <span>Free Plan</span>
          <span>337/3000</span>
        </div>
        <div className="upgrade-button">
          <Link href="/upgrade">
            <a>Upgrade Plan</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
