import Project1 from "@/image/1.png";
import Project2 from "@/image/2.png";
import Project3 from "@/image/3.jpg";
import Project4 from "@/image/4.png";

export default function uiuxproject() {
  return (
    <div className="w-full h-full bg-[#fffdf5] flex flex-col justify-start items-center rounded-2xl py-12 px-6">
      {/* 頁面標題與說明 */}
      <div className="flex flex-col w-full mb-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🖌️ UI/UX 專案展示
        </h1>
        <h3 className="text-gray-600 leading-relaxed">
          我參與設計的 UI/UX
          專案，包含應用程式介面、互動體驗。專注於使用者流程、視覺一致性與易用性
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 mt-3">
        {/* 第一層：大圖＋小圖 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[33vh]">
          {/* 左大圖：App 設計 */}
          <div
            className="bg-gray-200 sm:col-span-2 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Project1.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* 底部標題區 */}
            <div
              className="w-full h-[100px] backdrop-blur-md bg-black/30 text-white text-xl 
              absolute bottom-0 left-0 flex justify-center items-center font-semibold"
            >
              追夢輸送｜餐廳資訊平台設計
            </div>
          </div>

          {/* 右側圖：寵物資訊平台 */}
          <div
            className="bg-gray-200 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Project2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex justify-center items-center text-white font-semibold text-lg">
              政人量｜人力資源交流平台
            </div>
          </div>
        </div>

        {/* 第二層：雙圖排版 */}
        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {/* 左下圖：Rednote */}
          <div
            className="bg-gray-200 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Project3.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex justify-center items-center text-white font-semibold text-lg">
              小紅書｜介面優化與互動設計
            </div>
          </div>

          {/* 右下圖： */}
          <div
            className="bg-gray-200 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Project4.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex justify-center items-center text-white font-semibold text-lg">
              政大選課Extension|系統插件
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
