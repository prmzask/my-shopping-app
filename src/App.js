import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [activeTab, setActiveTab] = useState("meat");

  const handleItemClick = (item) => {
    setSelectedItems((prevItems) =>
      prevItems.includes(item)
        ? prevItems.filter((i) => i !== item)
        : [...prevItems, item]
    );
  };

  const handleShareToLine = () => {
    const message = `選ばれたアイテム: ${selectedItems.join(", ")}`;
    const encodedMessage = encodeURIComponent(message); // メッセージをURLエンコード
    const lineUrl = `https://line.me/R/msg/text/?${encodedMessage}`;

    window.open(lineUrl, "_blank"); // 新しいタブでLINEアプリのURLを開く
  };


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const items = {
    meat: [
      { name: "鶏むね", img: "/images/torimune.jpg" },
      { name: "豚こま", img: "/images/butakoma.jpg" },
      { name: "豚バラ(スライス)", img: "/images/butabara-sli.jpg" },
      { name: "豚バラ(しゃぶしゃぶ)", img: "/images/butabara-shabu.jpg" },

      { name: "豚かたロース", img: "/images/buta-katarosu.jpg" },
      { name: "とんかつ", img: "/images/tonkatsu.jpg" },
      { name: "豚バラ(焼肉用)", img: "/images/butabara-yaki.jpg" },
     
      
      { name: "牛カルビ(焼肉用)", img: "/images/karubi.jpg" },
      { name: "牛こま", img: "/images/gyukoma.jpg" },
    
     
    
    ],
    fish: [
      { name: "しゃけ", img: "/images/shake.jpg" },
      { name: "サバ", img: "/images/saba.jpg" },
      { name: "ぶり", img: "/images/buri.jpg" },
      { name: "たい", img: "/images/tai.jpg" },
    ],
    vegetable: [
      { name: "もやし", img: "/images/moyashi.jpg" },
      { name: "こまつな", img: "/images/komatsuna.jpg" },
      { name: "キャベツ", img: "/images/han-kyabetu.jpg" },
      { name: "はくさい", img: "/images/hakusai1_4.jpg" },
      { name: "にんじん", img: "/images/carrot.jpg" },
      { name: "だいこん", img: "/images/daikon.jpg" },
      { name: "ネギ", img: "/images/negi.jpg" },
      { name: "たまねぎ", img: "/images/tamanegi.jpg" },
    ],
    others: [
      { name: "うずら", img: "/images/uzura.jpg" },
      { name: "納豆", img: "/images/natto.jpg" },
    ],
  };

  return (
    <div className="App">
      <h1>おつかいアプリ</h1>

      <div className="tabs">
  <button className="tab tab-meat" onClick={() => handleTabChange("meat")}>肉</button>
  <button className="tab tab-fish" onClick={() => handleTabChange("fish")}>魚</button>
  <button className="tab tab-vegetable" onClick={() => handleTabChange("vegetable")}>野菜</button>
  <button className="tab tab-others" onClick={() => handleTabChange("others")}>その他</button>
</div>



      <div className="items">
        {items[activeTab].map((item) => (
          <div
            key={item.name}
            onClick={() => handleItemClick(item.name)}
            className={`item ${selectedItems.includes(item.name) ? "selected" : ""}`}
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      

 {/* LINEで共有ボタン */}
 <button
        onClick={handleShareToLine}
        disabled={selectedItems.length === 0}
      >
        LINEで共有
      </button>

    </div>
  );
}

export default App;

