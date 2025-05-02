import React, { useState } from "react";
import "./App.css";

function App() {
  const [quantities, setQuantities] = useState({});
  const [activeTab, setActiveTab] = useState("meat");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const changeQuantity = (itemName, delta) => {
    setQuantities((prev) => {
      const newQty = (prev[itemName] || 0) + delta;
      if (newQty <= 0) {
        const updated = { ...prev };
        delete updated[itemName];
        return updated;
      }
      return {
        ...prev,
        [itemName]: newQty,
      };
    });
  };

  const handleShareToLine = () => {
    const selected = Object.entries(quantities)
      .map(([name, qty]) => `${name}×${qty}`)
      .join("、");
    const lineUrl = `https://line.me/R/msg/text/?${encodeURIComponent(selected)}`;
    window.open(lineUrl, "_blank");
  };

  const items = {
    meat: [
      { name: "鶏むね", img: "/images/torimune.jpg" },
      { name: "豚こま", img: "/images/butakoma.jpg" },
      { name: "豚バラ(スライス)", img: "/images/butabara-sli.jpg" },
      { name: "豚バラ(しゃぶしゃぶ)", img: "/images/butabara-shabu.jpg" },
      { name: "豚かたロース", img: "/images/buta-katarosu.jpg" },
      { name: "豚ミンチ", img: "/images/butaminchi.jpg" },
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
      { name: "ニラ", img: "/images/nira.jpg" },
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
  <button className={`tab tab-meat ${activeTab === "meat" ? "active" : ""}`} onClick={() => handleTabChange("meat")}>肉</button>
  <button className={`tab tab-fish ${activeTab === "fish" ? "active" : ""}`} onClick={() => handleTabChange("fish")}>魚</button>
  <button className={`tab tab-vegetable ${activeTab === "vegetable" ? "active" : ""}`} onClick={() => handleTabChange("vegetable")}>野菜</button>
  <button className={`tab tab-others ${activeTab === "others" ? "active" : ""}`} onClick={() => handleTabChange("others")}>その他</button>
</div>


      <div className="items">
        {items[activeTab].map((item) => (
          <div key={item.name} className="item">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
            <div className="quantity-controls">
              <button onClick={() => changeQuantity(item.name, -1)}>-</button>
              <span>{quantities[item.name] || 0}</span>
              <button onClick={() => changeQuantity(item.name, 1)}>+</button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleShareToLine}
        disabled={Object.keys(quantities).length === 0}
      >
        LINEで共有
      </button>
    </div>
  );
}

export default App;
