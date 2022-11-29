import Image from "next/image";
import React from "react";
import Button from "../components/button";
import ColumnItem from "../components/column-item";
import Layout from "../components/layout";
import MealItem from "../components/meal-item";
import MealTime from "../components/meal-time";

const Notice = () => {
  const columnItems = [
    {
      title: "RECOMMENDED COLUMN",
      content: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      content: "ダイエット",
    },
    {
      title: "RECOMMENDED BEAUTY",
      content: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      content: "健康",
    },
  ];

  const mealItems = [
    {
      img: "/Photo/column-1.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-2.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-3.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-4.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-5.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-6.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-7.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
    {
      img: "/Photo/column-8.jpg",
      date: "2021.05.17",
      time: "23:25",
      title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
      tag: "#魚料理  #和食  #DHA",
    },
  ];

  return (
    <Layout>
      <div className="px-[40px] lg:px-[100px] xl:px-[160px]">
        <div className="py-[56px] flex items-center gap-x-8 flex-wrap gap-y-8">
          {columnItems.map((item) => (
            <ColumnItem key={item.title} {...item} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-[18px] mb-6">
          {mealItems.map((item, index) => (
            <MealItem key={item.title + index} {...item} />
          ))}
        </div>
        <Button>コラムをもっと見る</Button>
      </div>
    </Layout>
  );
};

export default Notice;
