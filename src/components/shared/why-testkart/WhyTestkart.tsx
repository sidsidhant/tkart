import Image from "next/image";
import icon01 from "../../../../public/assets/images/icon-1.svg";
import icon02 from "../../../../public/assets/images/icon-2.svg";
import icon03 from "../../../../public/assets/images/icon-3.svg";
import icon04 from "../../../../public/assets/images/icon-4.svg";
import Join from "../../../../public/assets/images/process-img.png";

type Props = {};

export default function WhyTestkart({}: Props) {
  return (
    <section className="section master-skill">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="section-header aos" data-aos="fade-up">
              <div className="content">
                <h2 style={{fontSize:"34px",fontWeight:"600"}} className="my-2">
                  Test<span>Kart</span> for students
                </h2>
                <p className="section-text">
                  Access best test series
                  <span className="yellow-text">
                    {" "}
                    directly from the teacher
                  </span>{" "}
                  and ace your entrance with ease
                </p>
              </div>
            </div>
            <div className="section-text aos" data-aos="fade-up">
              <p>
                &quot;The best preparation for tomorrow is doing your best
                today&quot;
              </p>
              <p>
                Practice with your favorite teachers by attempting their
                test-series online today at TestKart. Get instant results and
                analyze your weakness.
              </p>
            </div>
            <div className="career-group aos" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <Image src={icon01} alt="" />
                        </div>
                      </div>
                      <p>Prepare in real exam like scenario</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <Image src={icon02} alt="" />
                        </div>
                      </div>
                      <p>Choose Test Series of Your Favourite Teacher</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <Image src={icon03} alt="" />
                        </div>
                      </div>
                      <p>Get Detailed analysis of Test Result</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 d-flex">
                  <div className="certified-group blur-border d-flex">
                    <div className="get-certified d-flex align-items-center">
                      <div className="blur-box">
                        <div className="certified-img ">
                          <Image src={icon04} alt="" />
                        </div>
                      </div>
                      <p>Verified Test Series with students rating </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 d-flex align-items-center">
            <div className="career-img aos" data-aos="fade-up">
              <Image src={Join} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
