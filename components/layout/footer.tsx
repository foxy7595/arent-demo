import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerItems = [
    {
      title: "会員登録",
      link: "/register",
    },
    {
      title: "運営会社",
      link: "/company",
    },
    {
      title: "利用規約",
      link: "/terms",
    },
    {
      title: "個人情報の取扱について",
      link: "/privacy",
    },
    {
      title: "特定商取引法に基づく表記",
      link: "/trade",
    },
    {
      title: "お問い合わせ",
      link: "/contact",
    },
  ];
  return (
    <footer className="w-full pl-[40px] lg:pl-[160px] py-[46px] bg-dark-500">
      <ul className="flex items-center gap-[45px] flex-wrap">
        {footerItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.link}
              className="text-[11px] font-light text-light whitespace-nowrap"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
