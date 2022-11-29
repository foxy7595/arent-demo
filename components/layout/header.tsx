import Link from "next/link";
import React, { useState } from "react";
import IconChallenge from "../icons/challenge";
import IconClose from "../icons/close";
import IconInfo from "../icons/info";
import IconMemo from "../icons/memo";
import IconMenu from "../icons/menu";
import Logo from "../logo";

const Header = () => {
  const menu = [
    {
      title: "自分の記録",
      link: "/record",
      icon: <IconMemo />,
    },
    {
      title: "チャレンジ",
      link: "/challenge",
      icon: <IconChallenge />,
    },
    {
      title: "お知らせ",
      link: "/notice",
      icon: <IconInfo />,
      isHaveNotification: true,
      notificationCount: 3,
    },
  ];

  const menuDropdown = [
    {
      title: "自分の記録",
      link: "/record",
    },
    {
      title: "体重グラフ",
      link: "/graph",
    },
    {
      title: "目標",
      link: "/goal",
    },
    {
      title: "選択中のコース",
      link: "/course",
    },
    {
      title: "コラム一覧",
      link: "/column",
    },
    {
      title: "設定",
      link: "/setting",
    },
  ];

  const [isShowDropDown, setIsShowDropDown] = useState(false);

  return (
    <header
      className="w-full h-[64px] pl-[50px] xl:pl-[176px] pr-[50px] xl:pr-[160px] flex items-center justify-between bg-dark-500"
      style={{ boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.160784)" }}
    >
      <Link href={"/"}>
        <Logo />
      </Link>
      <div>
        <ul className="flex items-center gap-x-4">
          {menu.map((me) => (
            <li key={me.title}>
              <Link
                href={me.link}
                className="hidden md:flex items-center gap-x-2 text-light pr-3 text-base font-light"
              >
                <div className={`relative`}>
                  {me.isHaveNotification && (
                    <div className="absolute w-4 h-4 top-0 right-[-6px] bg-primary-500 rounded-full text-light text-[10px] font-inter flex items-center justify-center">
                      {me.notificationCount}
                    </div>
                  )}
                  {me.icon}
                </div>
                <span>{me.title}</span>
              </Link>
            </li>
          ))}
          <li className="relative">
            <button onClick={() => setIsShowDropDown(!isShowDropDown)}>
              {!isShowDropDown ? <IconMenu /> : <IconClose />}
            </button>
            {isShowDropDown && (
              <div className="absolute bg-gray-400 z-[999999] top-full left-0 translate-x-[-90%]">
                <ul>
                  {menuDropdown.map((me) => (
                    <>
                      <li key={me.title} className="py-[22px] pl-8 w-[280px]">
                        <Link
                          href={me.link}
                          className="font-light text-[18px] text-light"
                        >
                          {me.title}
                        </Link>
                      </li>
                      <div className="w-full h-[1px] bg-light mix-blend-normal opacity-[0.15]"></div>
                    </>
                  ))}
                </ul>
              </div>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
