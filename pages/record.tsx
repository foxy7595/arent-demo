import BodyRecord from "../components/body-record";
import Button from "../components/button";
import DiaryItem from "../components/diary-item";
import Layout from "../components/layout";
import RecordItem from "../components/record-item";

import s from "../styles/record.module.css";

const Record = () => {
  const recordItems = [
    {
      title: "Body record",
      buttonTitle: "自分のカラダの記録",
      img: "/Photo/MyRecommend-1.jpg",
    },
    {
      title: "MY EXERCISE",
      buttonTitle: "自分の運動の記録",
      img: "/Photo/MyRecommend-2.jpg",
    },
    {
      title: "MY DIARY",
      buttonTitle: "自分の日記",
      img: "/Photo/MyRecommend-3.jpg",
    },
  ];

  const exercises = [
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
    {
      title: "家事全般（立位・軽い）",
      time: "10 min",
      kcal: "26kcal",
    },
  ];
  return (
    <Layout>
      <div className="px-[40px] lg:px-[100px] xl:px-[160px]">
        <div className="flex-wrap flex gap-4 xl:gap-12 py-[56px]">
          {recordItems.map((record) => (
            <RecordItem key={record.title} {...record} />
          ))}
        </div>
        <BodyRecord />
        <div className="py-[56px]">
          <div className="px-6 py-4 bg-dark-500">
            <div className="flex items-center mb-1">
              <h3 className="max-w-[96px] font-inter text-[15px] text-light uppercase">
                my exercise
              </h3>
              <p className="font-inter text-[22px] text-light">2021.05.21</p>
            </div>
            <div
              className={`max-h-[190px] overflow-y-auto ${s["custom-scroll-bar"]}`}
            >
              <ul className="px-4 grid grid-cols-1 md:grid-cols-2 gap-x-[40px] gap-y-2">
                {exercises.map((exercise, index) => (
                  <li
                    className="col-span-1 list-disc text-light border-b border-b-gray-400 pb-[2px]"
                    key={`${exercise.title}-${index}`}
                  >
                    <div className="w-full flex items-center justify-between mb-0">
                      <p className="font-light text-[15px] text-light">
                        {exercise.title}
                      </p>
                      <p className="font-inter text-lg text-primary-300">
                        {exercise.time}
                      </p>
                    </div>
                    <span className="font-inter text-[15px] text-primary-300 mt-[-6px] block">
                      {exercise.kcal}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-inter text-[22px] text-dark-500 uppercase font-normal">
            my diary
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 pb-[30px]">
            {new Array(8).fill(0).map((_, index) => (
              <DiaryItem
                key={`diary-${index}`}
                time="23:25"
                date="2021.05.21"
                desc="私の日記の記録が一部表示されます。
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…"
              />
            ))}
          </ul>
          <Button>自分の日記をもっと見る</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Record;
