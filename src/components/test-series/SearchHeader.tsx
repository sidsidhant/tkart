import Image from "next/image";
import teacher from "public/images/teacher.png";

const SearchHeader = () => {
  return (
    <section id="test-series-hero" className="p-0 home-slide">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 flex flex-col justify-center items-center">
            <h1>Test Series by Top Teachers & Institutes of India</h1>
            <p className="py-3">
              Explore test series made by India&lsquo;s top educators to boost
              your exam preparation for Banking, Railways, Medical, Engineering,
              SSC, Defence and Other Exams
            </p>
            {/* <div className="search-box">
              <div className="search">
                <input
                  type="text"
                  placeholder="Search for what you are preparing for..."
                  className="form-control"
                />
                <button type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div> */}
          </div>
          <div className="col-md-4">
            <div className="pb-4 md:p-4">
              <Image
                src={teacher}
                alt="Teacher Hero Image"
                priority={false}
                className="h-64 md:h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="main-banner-ellipse">
        <Image src={elipses} alt="main-banner" />
      </div> */}
    </section>
  );
};

export default SearchHeader;
