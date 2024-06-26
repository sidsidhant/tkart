import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import course1 from "../../public/assets/images/course-01.jpg";
import icon01 from "../../public/assets/images/icon-01.svg";
import icon02 from "../../public/assets/images/icon-02.svg";
import { _request } from "src/utils/request.util"; // Initialize profiledata with an array of SomeType
import Link from "next/link";
import { useRouter } from "next/router";
import { RiDeleteBinLine } from "react-icons/ri";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteItemFromCart, getCartData } from "src/redux/slices/cartAction";

interface CartState {
  isLoading: boolean;
  data: any | null; // Replace YourDataType with the actual type of your cart data
  isError: boolean;
}
interface RootState {
  cart: CartState;
}
const Wishlist = () => {
  // const cartData = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  // const dispatch = useDispatch();

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      localStorage.setItem("path", router.asPath);
      router.push("/login");
    }
  };
  const DeleteItem = (id: any) => {
    checkToken();
    //@ts-ignore
    // dispatch(deleteItemFromCart(id));
    //@ts-ignore
    // dispatch(getCartData());
    // getCartData();
    // postApiCall(id, quantity);
  };
  return (
    <div>
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Pages
                    </li>
                    <li className="breadcrumb-item" aria-current="page">
                      Cart
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="course-content">
        <div className="container">
          {/* <div className="">
            {cartData?.data?.length === undefined ||
            cartData?.data?.length === 0 ||
            !cartData?.data ? (
              <div>No data found</div>
            ) : (
              <div className="card wish-card">
                {Array.isArray(cartData.data) &&
                  cartData.data.map((elem: any) => (
                    <div className="card-body" key={elem}>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="wishlist-item">
                            <div className="row align-items-center">
                              <div className="col-md-9">
                                <div className="wishlist-detail">
                                  <div className="wishlist-img">
                                    <Link href={`/test-series/${elem?.hash}`}>
                                      <>
                                        <Image
                                          src={elem?.cover_photo}
                                          alt=""
                                          width={250}
                                          style={{ objectFit: "cover" }}
                                          height={150}
                                          className="img-fluid"
                                        />
                                      </>
                                    </Link>
                                    <div className="price-amt">
                                      <h5> {elem?.discount}% off</h5>
                                    </div>
                                  </div>
                                  <div className="wishlist-info">
                                    <h5>
                                      <Link href={`/test-series/${elem?.hash}`}>
                                        <>{elem?.title}</>
                                      </Link>
                                    </h5>
                                    <div className="course-info d-flex align-items-center border-bottom-0 pb-0">
                                      <div className="rating-img d-flex align-items-center">
                                        <Image
                                          src={icon01}
                                          alt=""
                                          width={20}
                                          height={20}
                                        />
                                        <p>{elem?.free_tests} Free test</p>
                                      </div>
                                      <div className="course-view d-flex align-items-center">
                                        <Image
                                          src={icon02}
                                          alt=""
                                          width={20}
                                          height={20}
                                        />
                                        <p>9hr 30min</p>
                                      </div>
                                    </div>
                                    <div className="rating">
                                      <AiFillStar color="#FFB800" />
                                      <AiFillStar color="#FFB800" />
                                      <AiFillStar color="#FFB800" />
                                      <AiFillStar color="#FFB800" />
                                      <AiOutlineStar />
                                      <span className="d-inline-block average-rating">
                                        <span>4.0</span> (15)
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="remove-btn ">
                                <RiDeleteBinLine
                                  size={24}
                                  className="cursor-pointer"
                                  color="#ed7d39"
                                  onClick={() =>
                                    DeleteItem(elem.test_series_id)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          {cartData?.data?.length === undefined ||
          cartData?.data?.length === 0 ||
          !cartData?.data ? null : (
            <div className="button d-flex justify-content-end">
              <button
                className="button"
                onClick={() => router.push("/checkout")}
              >
                Checkout
              </button>
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
};

export default Wishlist;
