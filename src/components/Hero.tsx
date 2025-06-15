import { BiSearch } from "react-icons/bi";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 text-center overflow-hidden">

      {/* Tagline */}
      <p className="text-[#FDA15F] bg-[#FDA15F]/14 border border-[#FDA15F] w-fit px-4 rounded-full py-1 font-semibold text-xs">
        Job hunt made easy ✨
      </p>

      {/* Main Heading */}
      <h1 className="text-[#1F3C88] font-bold text-5xl sm:text-6xl leading-tight mb-1 mt-2">
        Get access to
        <br />
        your{" "}
        <span className="bg-gradient-to-t from-[#FDA15F] to-white bg-clip-text text-transparent">
          dream job
        </span>
      </h1>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-6xl -mt-2">

        {/* Left Testimonial */}
        <img
          src="src/assets/testimonial1.png"
          alt="Testimonial 1"
          className="hidden md:block md:w-2/6"
        />

        {/* Center Content */}
        <div className="flex flex-col items-center justify-center text-center max-w-lg px-2 gap-4">
          <p className="font-light text-sm text-gray-800">
            Get access to over 1000+ remote jobs listed online
          </p>

          {/* Search Bar */}
          <div className="flex items-center gap-2 border border-gray-300 rounded-full pl-4 pr-1 py-1 mt-2">
            <input
              type="text"
              placeholder="Search for jobs"
              className="outline-none"
            />
            <div className="text-white bg-[#FDA15F] p-2 rounded-full cursor-pointer hover:bg-[#FDA15F]/90 transition-all duration-300">
              <BiSearch />
            </div>
          </div>

          {/* Subtext */}
          <p className="font-light text-xs text-gray-800 mt-1 w-full">
            Did you know: Over 50% of corporate workers now prefer remote jobs.
          </p>
        </div>

        {/* Right Testimonial */}
        <img
          src="src/assets/testimonial2.png"
          alt="Testimonial 2"
          className="hidden md:block md:w-2/6"
        />
      </div>

      {/* Trusted By Section */}
      <div className="flex flex-row items-center sm:mt-4">
        <h3 className="font-light text-sm">Trusted by:</h3>
        <img src="src/assets/trusted.png" alt="Trusted by" className="w-48" />
      </div>
      
    </div>
  );
};

export default Hero;