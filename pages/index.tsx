import Image from "next/image";
import Button from "../components/button";
import Chart from "../components/chart";
import IconCup from "../components/icons/cup";
import IconKnife from "../components/icons/knife";
import Layout from "../components/layout";
import MealTime from "../components/meal-time";

import s from "../styles/Home.module.css";

export default function Home() {
  const mealTimes = [
    {
      icon: <IconKnife />,
      title: "Morning",
    },
    {
      icon: <IconKnife />,
      title: "Lunch",
    },
    {
      icon: <IconKnife />,
      title: "Dinner",
    },
    {
      icon: <IconCup />,
      title: "Snack",
    },
  ];

  const meal = [
    {
      img: "/Photo/m01.jpg",
      title: "05.21.Morning",
    },
    {
      img: "/Photo/l01.jpg",
      title: "05.21.Lunch",
    },
    {
      img: "/Photo/d01.jpg",
      title: "05.21.Dinner",
    },
    {
      img: "/Photo/s01.jpg",
      title: "05.21.Snack",
    },
    {
      img: "/Photo/m02.jpg",
      title: "05.20.Morning",
    },
    {
      img: "/Photo/l02.jpg",
      title: "05.20.Lunch",
    },
    {
      img: "/Photo/d02.jpg",
      title: "05.20.Dinner",
    },
    {
      img: "/Photo/s01.jpg",
      title: "05.20.Snack",
    },
  ];

  return (
    <Layout>
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-0">
          <div className="bg-[url('/Photo/d01.jpg')] h-[316px] basis-2/5 bg-center flex items-center justify-center">
            <div
              className={
                "w-[181px] h-[181px] rounded-full flex items-center justify-center gap-x-1 bg-[url('/Photo/circle.png')] " +
                s["progress-bar"]
              }
            >
              <span
                className="font-inter text-[18px] text-light"
                style={{ textShadow: "0px 0px 6px #FCA400" }}
              >
                05/21
              </span>
              <span
                className="font-inter text-[25px] text-light"
                style={{ textShadow: "0px 0px 6px #FC7500" }}
              >
                75%
              </span>
              {/* <div className="absolute top-0 left-0 rounded-full w-full h-[2px] bg-red-200"></div> */}
            </div>
          </div>
          <div className="basis-3/5 h-[316px] flex items-center justify-center bg-dark-600">
            <Chart />
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-4 md:gap-y-0 md:gap-x-[74px] mt-[22px] mb-[25px]">
          {mealTimes.map((meal) => (
            <MealTime key={meal.title} {...meal} />
          ))}
        </div>
        <div className="px-[40px] xl:px-[160px]">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-[28px]">
            {meal.map((me) => (
              <li key={me.title} className="cols-span-1">
                <div className={`w-full xl:w-[234px] h-[234px] relative`}>
                  <Image
                    src={me.img}
                    alt={me.title}
                    className="w-full h-full object-cover"
                    layout="fill"
                  />
                  <p className="absolute bottom-0 left-0 bg-primary-300 text-light py-[7px] pl-2 pr-[10px]">
                    {me.title}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Button>記録をもっと見る</Button>
        </div>
      </div>
    </Layout>
  );
}
