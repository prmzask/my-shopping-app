// src/SharePage.js
import React from "react";
import { useLocation } from "react-router-dom";

const items = {
  "鶏むね": "/images/torimune.jpg",
  "豚こま": "/images/butakoma.jpg",
  "豚バラ(スライス)": "/images/butabara-sli.jpg",
  "豚バラ(しゃぶしゃぶ)": "/images/butabara-shabu.jpg",
  "豚かたロース": "/images/buta-katarosu.jpg",
  "とんかつ": "/images/tonkatsu.jpg",
  "豚バラ(焼肉用)": "/images/butabara-yaki.jpg",
  "牛カルビ(焼肉用)": "/images/karubi.jpg",
  "牛こま": "/images/gyukoma.jpg",
  "しゃけ": "/images/shake.jpg",
  "サバ": "/images/saba.jpg",
  "ぶり": "/images/buri.jpg",
  "たい": "/images/tai.jpg",
  "もやし": "/images/moyashi.jpg",
  "こまつな": "/images/komatsuna.jpg",
  "キャベツ": "/images/han-kyabetu.jpg",
  "はくさい": "/images/hakusai1_4.jpg",
  "にんじん": "/images/carrot.jpg",
  "だいこん": "/images/daikon.jpg",
  "ネギ": "/images/negi.jpg",
  "たまねぎ": "/images/tamanegi.jpg",
  "うずら": "/images/uzura.jpg",
  "納豆": "/images/natto.jpg",
};

const SharePage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedItems = searchParams.get("selected")?.split(",") || [];

  return (
    <div>
      <h2>シェアされたおつかいリスト</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {selectedItems.map((name) => (
          <div key={name} style={{ margin: "10px", textAlign: "center" }}>
            <img
              src={items[name]}
              alt={name}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SharePage;
