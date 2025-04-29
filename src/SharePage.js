import React from "react";
import { useLocation } from "react-router-dom";

const allItems = {
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

const flattenItems = Object.values(allItems).flat();

function Shared() {
  const query = new URLSearchParams(useLocation().search);
  const itemNames = query.get("items")?.split(",") || [];

  const selected = flattenItems.filter((item) =>
    itemNames.includes(item.name)
  );

  return (
    <div>
      <h1>おつかいリスト</h1>
      <div className="items">
        {selected.map((item) => (
          <div key={item.name} className="item">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shared;
