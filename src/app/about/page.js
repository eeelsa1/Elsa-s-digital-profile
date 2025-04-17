import Image from "next/image";
import Applejpg from "@/../public/apple.jpg";

export default function AboutMe() {
  return (
    <div className="flex-1 w-full p-6 md:p-12 bg-[#fffdf5] rounded-2xl shadow-lg overflow-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">關於我 About Me</h1>

      <p className="text-lg text-gray-600 leading-relaxed mb-6">
        嗨，我是蔡銘元（Elsa
        Tsai），目前就讀於國立政治大學。我對網頁開發、設計與前端互動特效特別有熱情，平常喜歡結合創意與程式來打造有趣的互動作品。未來希望能夠在設計與技術中找到完美的平衡。
      </p>

      {/* 技能標籤 */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          技能 Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Figma"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-[#97b4de] text-white px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* 經歷時間軸 */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          學歷 / 經歷 Timeline
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-[#97b4de] pl-4">
            <h3 className="font-semibold text-gray-800">國立政治大學 NCCU</h3>
            <p className="text-sm text-gray-500">2021 - 現在｜阿拉伯語文學系</p>
            <p className="text-sm text-gray-500">
              2024 - 現在｜數位內容與科技學士學程
            </p>
          </div>
          
          <div className="border-l-4 border-[#97b4de] pl-4">
            <h3 className="font-semibold text-gray-800">
              個人網站 Project
            </h3>
            <p className="text-sm text-gray-500">
              2024｜Next.js + Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
