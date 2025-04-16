"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Appleimg from "@/../public/apple.jpg";

export default function AppleClickGame() {
  const [score, setScore] = useState(0);
  const [apples, setApples] = useState([]);

  useEffect(() => {
    // 客戶端執行，避免 SSR 隨機不同
    const generated = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      rotate: `${Math.random() * 40 - 20}deg`,
    }));
    setApples(generated);
  }, []);

  return (
    <div className="relative w-full h-screen bg-[#fffdf5] overflow-hidden flex flex-col items-center justify-start pt-12 px-6">
      {/* 標題與分數 */}
      <div className="z-10 text-center mb-6">
        <h1 className="text-4xl font-bold text-[#d14836]">🍎 點蘋果得分</h1>
        <p className="text-gray-700 mt-2">
          目前分數：<span className="text-2xl font-bold">{score}</span>
        </p>
      </div>

      {/* 蘋果區 */}
      <div className="relative w-full h-full">
        {apples.map((apple) => (
          <button
            key={apple.id}
            onClick={() => setScore((s) => s + 1)}
            className="absolute w-[60px] h-[60px] transition-transform hover:scale-110 active:scale-90"
            style={{
              top: apple.top,
              left: apple.left,
              transform: `rotate(${apple.rotate})`,
            }}
          >
            <Image
              src={Appleimg}
              alt="apple"
              width={60}
              height={60}
              className="rounded-full shadow-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
