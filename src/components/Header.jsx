
const Header = () => {
    return (
        <div className="flex justify-between items-center w-11/12 mx-auto py-6">
            <div><h3 className="text-3xl font-bold">Recipe Calories</h3></div>
            {/* nav menu items start here */}
            <div className="hidden md:flex items-center gap-4">
                <div><a href="#">Home</a></div>
                <div><a href="#">Recipes</a></div>
                <div><a href="#">Search</a></div>
                <div><a href="#">About</a></div>
            </div>
            {/* nav menu items end here */}
            <div className="flex items-center gap-4">
                <label className="input input-bordered flex items-center gap-2 rounded-full">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                {/* user icon */}
                <div><i className="fa-regular fa-user text-3xl"></i></div>
            </div>

        </div>
    );
};

export default Header;