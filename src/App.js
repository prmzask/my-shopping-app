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
    const message = selectedItems.join("、");
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;
    window.open(lineUrl, "_blank");
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
      { name: "牛豚合い挽きミンチ", img: "/images/aibiki.jpg" },
    ],
    fish: [
      { name: "しゃけ", img: "/images/shake.jpg" },
      { name: "サバ", img: "/images/saba.jpg" },
      { name: "ぶり", img: "/images/buri.jpg" },
      { name: "たい", img: "/images/tai.jpg" },
      { name: "かつお", img: "/images/katsuo.jpg" },
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
      { name: "トマト", img: "/images/tomato.jpg" },
      { name: "まいたけ", img: "/images/maitake.jpg" },
      { name: "エリンギ", img: "/images/eringi.jpg" },
      { name: "しめじ", img: "/images/simeji.jpg" },
      { name: "しょうが", img: "/images/shoga.jpg" },
    ],
    others: [
      { name: "うずら", img: "/images/uzura.jpg" },
      { name: "納豆", img: "/images/natto.jpg" },
      { name: "餃子の皮", img: "/images/gyoza.jpg" },
      { name: "うどん", img: "/images/udon.jpeg" },
      { name: "油揚げ", img: "/images/age.jpg" },
      { name: "厚揚げ", img: "/images/atsuage.jpg" },
      { name: "そば", img: "/images/soba.jpg" },
      { name: "そばつゆ", img: "/images/sobatsuyu.jpg" },
      { name: "しょうがスライス", img: "/images/shogaslice.jpg" },
      { name: "たまご豆腐", img: "/images/tofu.jpg" },
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
