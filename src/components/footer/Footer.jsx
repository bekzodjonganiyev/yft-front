import React, { useState } from "react";
import {
  TelegramIcon,
  InstagramIcon,
  YouTubeIcon,
  FacebookIcon,
  LeftIcon,
} from "../../assets/icons";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { useAppContext } from "../../context/app.contex";
export const Footer = () => {
  const { t } = useTranslation();
  const { colors } = useAppContext();
  return (
    <>
     
  
    <footer className={` mt-[20px] py-5 ${colors.darkBgColor3}`}>
      <div className="container-fluid w-[90%]  ">
        <div className="lg:flex md:flex container-fluid mx-auto   my-2   flex flex-wrap   gap-4 items-end justify-between">
        <div className=" w-[350px] mx-auto m-2  h-[200px] ">
          <Link to="/">
            <div className="flex items-center ">
              <img src={logo} alt="Main logo" className="w-30 h-24" />
              <p className={`text-white lg:text-2xl xl:text-xl md:text-lg md:w-[70%] font-bold`}>
                 {t("Header.name")}<br />
                <span className={`${colors.lightTextColor3} ml-1`}>
                {t("Header.name2")}
                </span>
              </p>
        
            </div>
            <div>
              <p className="text-white mb-2  lg:text-xl xl:text-sm">
              {t("footer.name")}
                
              </p>
            </div>
            <div className="icons">
              <div className="flex items-center gap-3 lg:w-3/12 xl:w-4/12 md:w-1/2 sm-w-full">
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  {" "}
                  <FacebookIcon
                    className={`flex items-center justify-center mx-auto`}
                    color="#082A58"
                  />
                </a>
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  <TelegramIcon color="#082A58" />
                </a>
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  <InstagramIcon color="#082A58"/>
                </a>
                <a href="#" className="w-[40px] bg-amber-500 p-2">
                  <YouTubeIcon color="#082A58" />
                </a>
              </div>
            </div>
          </Link>
        </div>
        <div className={`w-[250px] mx-auto mt-[20px]  h-[200px] items-center justify-between text-white font-bold xl:text-base `}
        >
          
          <NavLink className={`flex items-center my-2 mx-2`} to="about-us">
            <LeftIcon />
            <span className="mx-3">{t("Header.about")}</span>{" "}
          </NavLink>
          <NavLink className={`flex items-center my-2 mx-2`} to="products">
            {" "}
            <LeftIcon />
            <span className="mx-3">{t("Header.product")}</span>{" "}
          </NavLink>
         
          <NavLink className={`flex items-center my-2 mx-2`} to="partners">
            {" "}
            <LeftIcon />
            <span className="mx-3">{t("Header.partners")}</span>
          </NavLink>
          <a href={"#"} className={`flex items-center my-2 mx-2`}>
            {" "}
            <LeftIcon />
            <span className="mx-3">{t("Header.ContactUs")}</span>
          </a>
        </div>

        <div className={`w-[300px] mx-auto mt-5  h-[200px] items-center justify-between text-white font-bold  `}
        >
         
          <div className={`flex items-center `}>
            <a
              href="#"
              className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2 "
            >
              <span className="text-2xl flex items-center justify-center mx-auto">
                P
              </span>{" "}
            </a>
            <span className="mx-4"> +998 71 875 64 56</span>
          </div>

          
          <div className={`flex items-center `}>
            <a
              href="#"
              className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2 "
            >
              <span className="text-2xl flex items-center justify-center mx-auto">
                E
              </span>
            </a>{" "}
            <span className="mx-4"> Yangiyerflour@gmail.com</span>
          </div>
          <div className={`flex items-center `}>
            <a
              href="#"
              className="w-[40px] bg-amber-500 m-0  h-[40px] flex items-center my-2"
            >
              <span className="text-2xl flex items-center justify-center mx-auto">
                O
              </span>
            </a>{" "}
            <span className="mx-4"> Mon -Fri 9 am 6 pm</span>
          </div>
        </div>
        <div className=" w-[200px] mx-auto m-2  h-[200px]">
          <iframe
            src="https://goo.gl/maps/WjsLAMhVU4xqUrPp7"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl h-56 w-80"
          ></iframe>
          
        </div>
        </div>
      </div>
    </footer>
    </>
  );
};
