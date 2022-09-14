import React from "react";

const TopSection = () => {
  return (
    <div className="header__container">
      <img
        src="/assets/image/assets_1.svg"
        alt="banner"
        className="header__container__banner"
      />
      <p className="header__container__title">
        Tools for Designer, Developer, and Business Owner
      </p>
      <p className="header__container__info">
        Information about the latest and most popular design and developer tools
        around the world.
      </p>
      <button className="header__container__button">Explore Now</button>
      <div className="header__container__avatar-group">
        <img
          src="/assets/image/avatar.png"
          alt="avatar"
          className="header__container__avatar-group__avatar"
        />
        <img
          src="/assets/image/avatar.png"
          alt="avatar"
          className="header__container__avatar-group__avatar"
        />
        <label className="header__container__avatar-group__users">
          <span className="header__container__avatar-group__users__number">
            4,000+
          </span>
          User using the tools
        </label>
      </div>
    </div>
  );
};

export default TopSection;
