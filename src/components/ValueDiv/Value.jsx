import { SiSimplenote } from "react-icons/si";
import { FaHandHoldingHeart } from 'react-icons/fa'
import { BsShieldFillCheck } from 'react-icons/bs'
const Value = () => {
  return (
    <div className="mb-[4rem] mt-[6rem] card1">
      <h1 className="text-textColor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] block">
        The value that holds us true and to account
      </h1>

      <div className="grid gap-[10rem] grid-cols-3 items-center">
        <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] w-[40px] flex items-center justify-center">
              <SiSimplenote className="w-[70%] text-[30px] text-[#1e80d0] group-hover:text-white" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Simplicity
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            Things being made beautiful and simple are at the heart of
            everything we do.
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] w-[40px] flex items-center justify-center">
              <FaHandHoldingHeart className="w-[70%] text-[30px] text-[red] group-hover:text-white" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Community
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            We believe in making things better for everyone, even if just by a
            little bit!
          </p>
        </div>

        <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
          <div className="flex items-center gap-3">
            <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad] h-[40px] w-[40px] flex items-center justify-center">
              <BsShieldFillCheck className="w-[70%] text-[30px] text-[orange] group-hover:text-white" />
            </div>

            <span className="font-semibold text-textColor text-[18px]">
              Secure
            </span>
          </div>
          <p className="text-[13px] text-textColor opacity-[.7] py-[1rem] font-semibold">
            We give gives potential candidates clarity on what the employer
            expects.
          </p>
        </div>
      </div>

      <div className="card2 mt-[2rem] flex justify-between bg-blueColor p-[5rem] rounded-[10px]">
        <div>
          <h1 className="text-blueColor text-[30px] font-bold">
            Ready to switch a career?
          </h1>
          <h2 className="text-textColor text-[25px] font-bold">
            Let&apos;s get started!
          </h2>
        </div>
        <button className="border-[2px] rounded-[10px] py-[4px] px-[40px] text-[18px] font-semibold colorful-button">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Value;
