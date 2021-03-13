import React from "react";

import * as CONSTANTS from "../../constants/constants";
import { translate, getTabMergerLink, resetTutorialChoice } from "../App/App_functions";
import LinkBtn from "../Button/LinkBtn";
import { DialogProps } from "./Dialog";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { BsChat } from "react-icons/bs";
import { FaReddit, FaStackOverflow } from "react-icons/fa";
import { FiYoutube, FiStar } from "react-icons/fi";
import { MdPayment } from "react-icons/md";
import { RiHandCoinLine } from "react-icons/ri";

export interface ILinks {
  url: string;
  text: string;
  icon: JSX.Element;
}

const LINKS: Array<ILinks> = [
  { url: "https://lbragile.github.io/TabMerger-Extension/", text: translate("needHelp"), icon: <BiHelpCircle color="black" /> }, // prettier-ignore
  { url: "https://lbragile.github.io/TabMerger-Extension/contact", text: translate("bgContact"), icon: <BsChat color="black" /> }, // prettier-ignore
  { url: CONSTANTS.SUBSCRIPTION_URL, text: "Choose Plan", icon: <MdPayment color="black" size="1.5rem" />}, // prettier-ignore
  { url: "https://youtu.be/zkI0T-GzmzQ", text: translate("quickDemo"), icon: <FiYoutube color="black" /> },
  { url: process.env.REACT_APP_PAYPAL_URL, text: translate("donate"), icon: <RiHandCoinLine color="black" /> },
  { url: getTabMergerLink(true), text: translate("leaveReview"), icon: <FiStar color="black" /> },
  { url: "https://github.com/lbragile/TabMerger", text: "GitHub", icon: <AiFillGithub color="black" /> },
  { url: "https://www.linkedin.com/in/liorbragilevsky/", text: "LinkedIn", icon: <AiFillLinkedin color="black" /> },
  { url: "https://stackoverflow.com/users/4298115/lbragile", text: "StackOverflow", icon: <FaStackOverflow color="black" /> }, // prettier-ignore
  { url: "https://www.reddit.com/user/lbragile_dev", text: "Reddit", icon: <FaReddit color="black" /> },
];

export type setStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export default function Links({
  setTour,
  setDialog,
}: {
  setTour: setStateType<boolean>;
  setDialog: setStateType<DialogProps>;
}) {
  return (
    <React.Fragment>
      <hr className="mx-auto" />

      {LINKS.slice(0, 6).map((x, i) => {
        return (
          <React.Fragment key={Math.random()}>
            <LinkBtn
              text={x.text}
              url={x.url}
              icon={x.icon}
              tooltip={true}
              place={i <= 2 ? "top" : "bottom"}
              onClickFn={i === 0}
              /* @ts-ignore */
              resetTutorialChoice={resetTutorialChoice}
              setTour={setTour}
              setDialog={setDialog}
            />
            {i === 2 && <div className="my-2" />}
          </React.Fragment>
        );
      })}

      <hr className="mx-auto" />

      <div id="my-links">
        {LINKS.slice(6).map((x) => {
          return <LinkBtn text={x.text} url={x.url} icon={x.icon} key={Math.random()} />;
        })}
      </div>
    </React.Fragment>
  );
}
