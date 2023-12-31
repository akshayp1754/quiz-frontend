import { useEffect, useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const getUser = () => {
    const data = localStorage.getItem("User");
    const user = JSON.parse(data);
    if (user) {
      setUser(user.data.username);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("User");
    navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <nav
      style={{
        background: "#0E131F",
      }}
      className="bg-white-800 shadow-md w-full"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 left-0 flex items-center">
            <img
              onClick={() => navigate("/")}
              className="hidden lg:block h-10 w-auto"
              src="https://www.svgrepo.com/show/384978/donut-doughnut-sweet-dessert-food-fastfood.svg"
              alt="Logo"
            /> <Link to="/"></Link>
          </div>
          <div className="flex w-2/3 items-center">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              {/* <input
                style={{
                  borderBottom: "1px solid #ffbf00",
                }}
                type="text"
                id="simple-search"
                className="
                rounded-md
                focus:outline-none
                bg-white-50  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  "
                placeholder="Search post by name..."
                required=""
              /> */}
            </div>
          </div>

          <div className=" inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative">
              <div className="flex">
                <button
                  className="max-w-xs mr-3 bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  
                </button>
                <button
                  onClick={handleLogout}
                  className="max-w-xs justify-center p-2 bg-gray-800 text-white rounded-full flex items-center text-sm focus:outline-none focus:shadow-solid"
                  id="user-menu"
                  aria-label="User menu"
                  aria-haspopup="true"
                > Logout
                  {/* <span className="bg-yellow-500 rounded-full h-8 w-8 flex items-center justify-center">
                    <img
                      src="https://www.svgrepo.com/show/500927/logout.svg"
                      alt="logout"
                    />
                  </span> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
