
const Banner = () => {
    return (
        <div className="w-11/12 mx-auto ">
            <div className="bg-cover py-16 md:py-36 px-10 md:px-44 rounded-[16px] bg-no-repeat" style={{backgroundImage:'url(https://img.freepik.com/free-photo/pasta-bread-with-space-middle_23-2147686516.jpg?t=st=1737354709~exp=1737358309~hmac=a2f632d7946bdfd2d86f0643ff4206ff405c6c5079d9fe710568157e7985cde7&w=1380)'}}>
           <div className="text-center">
           <h1 className="text-2xl md:text-4xl font-semibold md:font-bold  text-white ">Discover an exceptional cooking class tailored for you!</h1>
           <p className="md:text-xl text-gray-200 my-6">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
           <button className="btn bg-[#0BE58A] rounded-full py-2 px-8 border-none text-xl font-semibold mr-6">Explore Now</button>
           <button className=" rounded-full py-2 px-8  text-xl text-white border-2 md:mt-20 ">Our Feedback</button>
           </div>
            
        </div>
        </div>
    );
};

export default Banner;