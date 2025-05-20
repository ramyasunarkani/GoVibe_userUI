import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./TopListing.css";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { wishlistActions } from "../Store/wishlistSlice";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopListing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const popularListings = useSelector((state) => state.listings.popular);
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const userLogged = useSelector((state) => state.auth.userLogged);

  const handleLikeClick = (listing) => {
    if (!userLogged) {
      navigate("/signin");
    } else {
      const alreadyLiked = wishlistItems.some((item) => item.id === listing.id);
      if (alreadyLiked) {
        dispatch(wishlistActions.removeItem(listing.id));
      } else {
        dispatch(wishlistActions.addItem(listing));
      }
    }
  };

  const handleViewMore = (id) => {
    navigate(`/listing/${id}`);
  };

  const cardSliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="popular-listings-container">
      <h2>Popular stays for you</h2>
      <Slider {...cardSliderSettings}>
        {popularListings.map((listing) => {
          const images = listing.images || [];
          const liked = wishlistItems.some((item) => item.id === listing.id);

          return (
            <div key={listing.id} className="listing-card">
              <div className="image-container">
                {images.length > 0 && (
                  <img
                    src={images[0]}
                    alt={listing.placeName}
                    className="listing-image"
                  />
                )}
                <button
                  className={`like-btn ${liked ? "liked" : ""}`}
                  onClick={() => handleLikeClick(listing)}
                >
                  {liked ? <FaHeart /> : <CiHeart />}
                </button>
              </div>
              <div className="listing-details">
                <h3>{listing.placeName}</h3>
                <p>{listing.address?.city}</p>
              </div>
              <button className="view-more-btn" onClick={() => handleViewMore(listing.id)}>
                View More
              </button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default TopListing;
