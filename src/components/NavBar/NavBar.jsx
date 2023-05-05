const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[30px] text-blueColor">
          <strong>Job</strong>Search
        </h1>
      </div>

      <div className="menu flex gap-8 items-center">
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Jobs</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
          Companies
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">About</li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">
          Contact
        </li>
        <li className="menulist text-[#6f6f6f] hover:text-blueColor">Blog</li>
        <button className="bg-blueColor h-full p-3 px-5 rounded-[10px] text-white cursor-pointer hover:bg-blue-700">
          Login/Signup
        </button>
      </div>
    </div>
  );
}

export default NavBar