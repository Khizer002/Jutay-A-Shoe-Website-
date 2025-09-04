import React, { useEffect } from "react";
import './NavBar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    const defaultSpan = document.querySelector(".default");
    const hoverSpan = document.querySelector(".hover");

    if (defaultSpan && hoverSpan) {
      hoverSpan.style.opacity = 0;
      defaultSpan.animate(
        [
          { transform: "translateY(9px)", opacity: 1 },
          { transform: "translateY(45px)", opacity: 0 },
          { transform: "translateY(300px)", opacity: 0 },
          { transform: "translateY(150px)", opacity: 0 },
          { transform: "translateY(9px)", opacity: 1 }
        ],
        {
          duration: 10000,
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
      hoverSpan.animate(
        [
          { transform: "translateY(30px)", opacity: 0 },
          { transform: "translateY(-9px)", opacity: 1 },
          { transform: "translateY(-9px)", opacity: 1 },
          { transform: "translateY(30px)", opacity: 0 },
        ],
        {
          duration: 10000,
          iterations: Infinity,
          easing: "ease-in-out",
          delay: 1000
        }
      );
    }
  }, []);
  return (
    <nav style={{position:'relative'}}>
      <div className="first">
        <div className="social">
          <a
            href="https://www.instagram.com/thejutay.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="fs"
          >
            <svg class="m-svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
            </svg>
            <span>&nbsp;132k Followers</span>
          </a>

          <a
            href="https://www.facebook.com/thejutay.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="fs"
          >
            <svg class="m-svg-icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.75 8C15.75 9.91667 15.125 11.6042 13.875 13.0625C12.625 14.5 11.0729 15.3646 9.21875 15.6562V10.25H11.0312L11.375 8H9.21875V6.53125C9.21875 5.73958 9.63542 5.34375 10.4688 5.34375H11.4375V3.4375C10.8542 3.33333 10.2812 3.28125 9.71875 3.28125C9.11458 3.28125 8.59375 3.39583 8.15625 3.625C7.73958 3.85417 7.40625 4.19792 7.15625 4.65625C6.90625 5.11458 6.78125 5.65625 6.78125 6.28125V8H4.8125V10.25H6.78125V15.6562C4.92708 15.3646 3.375 14.5 2.125 13.0625C0.875 11.6042 0.25 9.91667 0.25 8C0.25 5.85417 1 4.03125 2.5 2.53125C4.02083 1.01042 5.85417 0.25 8 0.25C10.1458 0.25 11.9688 1.01042 13.4688 2.53125C14.9896 4.03125 15.75 5.85417 15.75 8Z" fill="currentColor"></path>
            </svg>
            <span>&nbsp;8k Followers</span>
          </a>

        </div>
        <div className="hover-container">
          <div className="default">Free shipping all over Pakistan</div>
          <div className="hover" >7-Day Return and Exchange Policy</div>
        </div>
        <div className="advance">
          <span>Orders over 20,000 needs a 10% advance</span>
        </div>
      </div>
      {/* <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> */}
    </nav>
  );
};

export default Navbar;
