import Image from "next/image";
import user1 from "../../../public/assets/images/user1.jpg";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SeriesCreator(props: any) {
  const data = props.data;

  return (
    <div className="card instructor-sec">
      <div className="card-body">
        <h5 className="subs-title">About the Creator </h5>
        <div className="instructor-wrap">
          <div className="about-instructor">
            <div className="abt-instructor-img">
              <a href="javascript:;">
                <Image src={user1} alt="" width={40} height={40} />
              </a>
            </div>
            <div className="instructor-detail">
              <h5>
                <a href="javascript:;">{data?.display_name}</a>
              </h5>
              <p>{data?.academy_name}</p>
            </div>
          </div>
          {data && data.ratings && (
            <div className="rating">
              <AiFillStar color="#FFB800" />
              <AiFillStar color="#FFB800" />
              <AiFillStar color="#FFB800" />
              <AiFillStar color="#FFB800" />
              <AiOutlineStar color="#FFB800" />
              <span className="d-inline-block average-rating">
                4.5 Instructor Rating
              </span>
            </div>
          )}
        </div>
        {data && data.stats && (
          <div className="course-info d-flex align-items-center">
            <div className="cou-info">
              <p>15 Test series</p>
            </div>
            <div className="cou-info">
              <p>270,866 students enrolled</p>
            </div>
          </div>
        )}
        <p>{data?.about}</p>
      </div>
    </div>
  );
}
