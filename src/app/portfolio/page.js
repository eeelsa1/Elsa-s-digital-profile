import Image from "next/image";
import exampleImg from "@/../public/apple.jpg"; // 替換成你自己的作品圖

export default function PortfolioPage() {
  const projects = [
    {
      title: "個人網站",
      desc: "使用 Next.js + Tailwind CSS 建置的自我介紹網站，整合動態頁面與 RWD 設計。",
      tech: ["Next.js", "Tailwind CSS", "TypeScript"],
      img: exampleImg,
      link: "#",
    },
    {
      title: "甜點主題遊戲",
      desc: "以旋轉木馬與糖果為主題的互動點擊遊戲，融合動畫與音效。",
      tech: ["React", "Framer Motion", "Howler.js"],
      img: exampleImg,
      link: "#",
    },
    {
      title: "迷克夏Chatbot MOOMOO",
      desc: "製作迷克夏客服機器人，提供即時回覆與互動功能。",
      tech: ["持續進行中"],
      img: exampleImg,
      link: "#",
    },
  ];

  return (
    <div className="flex-1 w-full p-6 md:p-12 bg-[#fffdf5] rounded-2xl shadow-lg overflow-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        作品集 Portfolio
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        以下是我近期完成的一些設計與前端開發作品，包含網頁設計、互動遊戲與聊天機器人等。每個專案都展現了我的技術能力與創意，歡迎點擊查看！
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-[#fffdf5] rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden"
          >
            <Image
              src={proj.img}
              alt={proj.title}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {proj.title}
              </h2>
              <p className="text-sm text-gray-600 my-2">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 my-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#97b4de] text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {proj.link && (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-blue-600 hover:underline"
                >
                  🔗 查看作品
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
