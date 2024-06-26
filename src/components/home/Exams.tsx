import Link from "next/link";
import { useState } from "react";
import { Row } from "react-bootstrap";
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";

export default function Exams(props: { exams: any }) {
  const category = props.exams || [];
  const defaultCategoryIndex = 0;
  const [categoryIndex, setCategoryIndex] = useState(defaultCategoryIndex);
  const [selectedIndex, setSelectedIndex] = useState(defaultCategoryIndex);
  const handleClick = (index: any) => {
    setSelectedIndex(index);
  };

  const scroll = (scrollOffset: any) => {
    let slider = document.getElementById("sliderCara");
    //@ts-ignore
    slider.scrollLeft = slider.scrollLeft - scrollOffset;
  };
  const sellerScroll = (scrollOffset: any) => {
    let slider = document.getElementById("sliderCara");
    //@ts-ignore
    slider.scrollLeft = slider.scrollLeft - scrollOffset;
  };

  return (
    <section id="exams">
      <div className="container">
        <div className="section-title mb-4">
          <div className="section-sub-head">
            <h2>Popular Exams</h2>
          </div>
          <div className="section-text mt-3">
            <p className="text-center">
              Explore test series for any entrance exam made by top educators of
              India
            </p>
          </div>
        </div>

        <div className="carouselDiv mb-4">
          <div onClick={() => scroll(+100)} className="arrowButton">
            <BiLeftArrowCircle />
          </div>
          <ul className="slider-caraousel" id="sliderCara">
            {category?.map((category: any, index: any) => {
              return (
                <>
                  {category?.exams?.length === 0 ? (
                    <></>
                  ) : (
                    <li
                      className={`buttonTile ${
                        selectedIndex === index ? "buttonTitleBorder" : ""
                      }`}
                      key={index}
                      onClick={() => [
                        setCategoryIndex(index),
                        handleClick(index),
                      ]}
                    >
                      {category.category}
                    </li>
                  )}
                </>
              );
            })}
          </ul>
          <div onClick={() => sellerScroll(-100)} className="arrowButton">
            <BiRightArrowCircle />
          </div>
        </div>

        <div className="row kart-row " style={{ minHeight: "200px" }}>
          {category[categoryIndex]?.exams.length == 0 ? (
            <p className="text-center pt-5">
              No exams for the moment. We are working on it.
            </p>
          ) : (
            ""
          )}
          <Row className="gap-3 d-flex justify-content-start align-items-start mx-3">
            {category[categoryIndex]?.exams.map((item: any, index: any) => {
              return (
                <div className="col-md-2 exam-icons" key={index}>
                  <Link href={item?.slug} className="icons">
                    <>
                      <div className="image-icons">
                        <img
                          src={
                            item?.exam_content?.logo ||
                            "https://testkart.in/fav.png"
                          }
                          alt="Testkart"
                          className=""
                        />
                      </div>
                      <div className="cover">
                        <div className="my-2">{item?.exam}</div>
                      </div>
                    </>
                  </Link>
                </div>
              );
            })}
          </Row>
        </div>
      </div>
    </section>
  );
}
