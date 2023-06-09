import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-12 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-[15px] text-white pb-[7px] pl-[10px] opacity-70 leading-7">
          We always make our seekers and companies find the best jobs and
          employers find the best candidates.
        </p>
      </div>

      <div className="grid justify-center">
        <span className="divTitle text-[18px] font-semibold pd-[1.5rem] text-white">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            About Us
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Features
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">News</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">FAQs</li>
        </div>
      </div>

      <div className="grid justify-center">
        <span className="divTitle text-[18px] font-semibold pd-[1.5rem] text-white">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Account</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Support Center
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Feedback
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Contact</li>
        </div>
      </div>

      <div className="grid justify-center">
        <span className="divTitle text-[18px] font-semibold pd-[1.5rem] text-white">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[.7] hover:opacity-[1]">Events</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Promo</li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">
            Request Demo
          </li>
          <li className="text-white opacity-[.7] hover:opacity-[1]">Careers</li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pd-[1.5rem] text-white">
          Contact Info
        </span>
        <div className="grid gap-2">
          <small>
            <a
              href="http://navneet.site"
              className="text-[14px] opacity-[.7] text-white hover:opacity-[1]"
            >
              www.navneet.site
            </a>
          </small>
          <small className="text-[14px] opacity-[.7] text-white hover:opacity-[1]">
            contact@jobsearch.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <AiFillInstagram className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor hover:text-textColor" />
            <BsFacebook className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor hover:text-textColor" />
            <AiFillTwitterCircle className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor hover:text-textColor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
