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
  <button
  onClick={handleShareToLine}
  disabled={selectedItems.length === 0}
>
  LINEで共有
</button>

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const items = {
    meat: [
      { name: "とんかつ", img: "/images/tonkatsu.jpg" },
      { name: "牛カルビ(焼肉用)", img: "/images/karubi.jpg" },
      { name: "豚バラスライス", img: "/images/butabara-sli.jpg" },

      { name: "牛こま", img: "/images/gyukoma.jpg" },
      { name: "豚こま", img: "/images/butakoma.jpg" },
      { name: "豚バラ(焼肉用)", img: "/images/butabara-yaki.jpg" },
      { name: "鶏むね", img: "/images/torimune.jpg" },
    ],
    fish: [
      { name: "Salmon", img: "https://via.placeholder.com/150?text=Salmon" },
      { name: "Tuna", img: "https://via.placeholder.com/150?text=Tuna" },
    ],
    vegetable: [
      { name: "Carrot", img: "https://via.placeholder.com/150?text=Carrot" },
      { name: "Broccoli", img: "https://via.placeholder.com/150?text=Broccoli" },
    ],
    others: [
      { name: "Rice", img: "https://via.placeholder.com/150?text=Rice" },
      { name: "Bread", img: "https://via.placeholder.com/150?text=Bread" },
    ],
  };

  return (
    <div className="App">
      <h1>おつかいアプリ</h1>

      <div className="tabs">
        <button onClick={() => handleTabChange("meat")}>肉</button>
        <button onClick={() => handleTabChange("fish")}>魚</button>
        <button onClick={() => handleTabChange("vegetable")}>野菜</button>
        <button onClick={() => handleTabChange("others")}>その他</button>
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

      <button
        onClick={() => alert(`選ばれたアイテム: ${selectedItems.join(", ")}`)}
        disabled={selectedItems.length === 0}
      >
        選択したアイテムを送信
      </button>

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

