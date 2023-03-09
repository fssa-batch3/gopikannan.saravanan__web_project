// let details = [
//   {
//     img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1667841206/production/images/campaign/587864/IMG20221009062455_ovmi0x_1667842343.jpg",
//     title: "Help me study to win in life",
//     fund_percentage: "30%",
//     value_progress: 30,
//     amount_raised: "Rs 6,00,000",
//     supporters: 550,
//     fundraiser: "Kumar",
//   },
//   {
//     img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663057048/production/images/campaign/562956/Divyam_4_luynfw_1663057051.jpg",
//     title: "Help Divyam Fight From Leukaemia",
//     fund_percentage: "30%",
//     value_progress: 30,
//     amount_raised: " Rs.13,00,000",
//     supporters: 350,
//     fundraiser: "Ajay",
//   },
//   {
//     img: "https://kettocdn.gumlet.io/media/campaign/625000/625122/image/627fff291f29d.png?w=768&dpr=1.5",
//     title: "School For Special Needs",
//     fund_percentage: "45%",
//     value_progress: "45",
//     amount_raised: "Rs.4,63,521",
//     supporters: 240,
//     fundraiser: "Ram",
//   },
//   {
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowM5xzcQl9XbrUJsI29z-cEaJK-BXh69GSA&usqp=CAU",
//     title: "My Baby Battles For His Life And We Need Your Support To Save Him",
//     fund_percentage: "72%",
//     value_progress: 72,
//     amount_raised: "Rs.3,63,521 ",
//     supporters: 482,
//     fundraiser: "Somu",
//   },
//   {
//     img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/street_dog_5.jpg?v=1645437822",
//     title: "HELP US BUILD A SHELTER HOME",
//     fund_percentage: "23%",
//     value_progress: "23",
//     amount_raised: "Rs.1,58,152  ",
//     supporters: 50,
//     fundraiser: "Veera",
//   },
//   {
//     img: "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/6089ceb85c0bd.jpeg?w=768&dpr=1.5",
//     title: "Feeding From Far-Ration Distribution Amid Lockdown",
//     fund_percentage: "80%",
//     value_progress: "80",
//     amount_raised: "Rs.80,00,000 ",
//     supporters: 9716,
//     fundraiser: "Pooja",
//   },
// ];

// let card_div;
// let anchor;
// let span;
// let image;
// let h4_tag;
// let progress_div;
// let b_tag;
// let progress_tag;
// let progress_span_tag;
// let a_span_like;
// let image_like;
// let a_span_share;
// let image_share;
// let amount_sec;
// let txt_amount;
// let cash;
// let count;
// let user_div;
// let user_name;
// let fundraisername;

// for (let i = 0; i <= details.length; i++) {
//   //  <div class="box"></div>
//   card_div = document.createElement("div");
//   card_div.setAttribute("class", "box");

//   //<a></a>
//   anchor = document.createElement("a");
//   anchor.setAttribute("href", "../../webpage/donate/story.html");
//   anchor.setAttribute("style", "text-decoration:none;");
//   card_div.append(anchor);

//   //   <span class="linkspanner"></span>
//   span = document.createElement("span");
//   span.setAttribute("class", "linkspanner");
//   anchor.append(span);

//   //   <img class="image" src="../../Assets/images/education.jpg" alt="education" />
//   image = document.createElement("img");
//   image.setAttribute("class", "image");
//   image.setAttribute("src", details[i]["img"]);
//   image.setAttribute("alt", "education");
//   anchor.append(image);

//   //   <h4></h4>
//   h4_tag = document.createElement("h4");
//   h4_tag.innerText = details[i]["title"];
//   anchor.append(h4_tag);

//   //   <div class="progress-sec"></div>
//   progress_div = document.createElement("div");
//   progress_div.setAttribute("class", "progress-sec");
//   anchor.append(progress_div);

//   //   <b> 20%</b>

//   b_tag = document.createElement("b");
//   b_tag.innerText = details[i]["fund_percentage"];
//   progress_div.append(b_tag);

//   //   <progress id="file" value="32" max="100">20%</progress>
//   progress_tag = document.createElement("progress");
//   progress_tag.setAttribute("id", "file");
//   progress_tag.setAttribute("value", details[i]["value_progress"]);
//   progress_tag.setAttribute("max", "100");
//   progress_tag.innerText = "20%";
//   progress_div.append(progress_tag);

//   //span
//   progress_span_tag = document.createElement("span");
//   progress_span_tag.setAttribute("class", "like");
//   progress_div.append(progress_span_tag);

//   //   a
//   a_span_like = document.createElement("a");
//   a_span_like.setAttribute("href", "#");
//   progress_span_tag.append(a_span_like);

//   // img

//   image_like = document.createElement("img");
//   image_like.setAttribute("src", "../../Assets/images/icons8-favorite-50.png");
//   image_like.setAttribute("alt", "Like");
//   image_like.setAttribute("class", "icon-like");
//   image_like.setAttribute("width", "30px");
//   a_span_like.append(image_like);

//   // a
//   a_span_share = document.createElement("a");
//   a_span_share.setAttribute("href", "#");
//   progress_span_tag.append(a_span_share);

//   // img
//   image_share = document.createElement("img");
//   image_share.setAttribute("src", "../../Assets/images/share.png");
//   image_share.setAttribute("class", "share");
//   image_share.setAttribute("alt", "share");
//   image_share.setAttribute("width", "30px");
//   a_span_share.append(image_share);

//   // <div class="amount">
//   amount_sec = document.createElement("div");
//   amount_sec.setAttribute("class", "amount");
//   progress_div.append(amount_sec);

//   // <span id="txt-amt"></span>
//   txt_amount = document.createElement("span");
//   txt_amount.setAttribute("id", "txt-amt");
//   txt_amount.innerText = "Raised :";
//   amount_sec.append(txt_amount);

//   // <span id="cash"></span>
//   cash = document.createElement("span");
//   cash.setAttribute("id", "cash");
//   cash.innerText = details[i]["amount_raised"];
//   amount_sec.append(cash);

//   // <span class="count"></span>
//   count = document.createElement("span");
//   count.setAttribute("class", "count");
//   count.innerText = details[i]["supporters"];
//   progress_div.append(count);

//   // <div class="user"></div>
//   user_div = document.createElement("div");
//   user_div.setAttribute("class", "user");
//   anchor.append(user_div);

//   // <span class="name-label"></span>
//   user_name = document.createElement("span");
//   user_name.setAttribute("class", "name-label");
//   user_name.innerText = "Created by";
//   user_div.append(user_name);

//   // <span class="name"></span>
//   fundraisername = document.createElement("span");
//   fundraisername.setAttribute("class", "name");
//   fundraisername = innerText = details[i]["fundraiser"];
//   user_div.append(fundraisername);

//   document.querySelector(".container").append(card_div);
// }

let json = [
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1667841206/production/images/campaign/587864/IMG20221009062455_ovmi0x_1667842343.jpg",
    alt: "education",
    title: "Help me study to win in life",
    amount_raised: 600000,
    expected_amt: 3000000,
    supporters: 550,
    fundraiser: "Kumar",
  },
  {
    img: "https://cimages.milaap.org/milaap/image/upload/c_fill,h_452,w_603/v1663057048/production/images/campaign/562956/Divyam_4_luynfw_1663057051.jpg",
    alt: "baby",
    title: "Help Divyam Fight From Leukaemia",
    amount_raised: 1300000,
    expected_amt: 5000000,
    supporters: 350,
    fundraiser: "Ajay",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/625000/625122/image/627fff291f29d.png?w=768&dpr=1.5",
    alt: "school for special needs ",
    title: "School For Special Needs",
    amount_raised: 463521,
    expected_amt: 1000000,
    supporters: 240,
    fundraiser: "Ram",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSowM5xzcQl9XbrUJsI29z-cEaJK-BXh69GSA&usqp=CAU",
    alt: "babyemerg",
    title: "My Baby Battles For His Life And We Need Your Support To Save Him",
    amount_raised: 363521,
    expected_amt: 500000,
    supporters: 482,
    fundraiser: "Somu",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0086/0795/7054/files/street_dog_5.jpg?v=1645437822",
    alt: "shelter for dog",
    title: "HELP US BUILD A SHELTER HOME",
    amount_raised: 158152,
    expected_amt: 700000,
    supporters: 50,
    fundraiser: "Veera",
  },
  {
    img: "https://kettocdn.gumlet.io/media/campaign/180000/180773/image/6089ceb85c0bd.jpeg?w=768&dpr=1.5",
    alt: "food distribution",
    title: "Feeding From Far-Ration Distribution Amid Lockdown",
    amount_raised: 8000000,
    expected_amt: 10000000,
    supporters: 9716,
    fundraiser: "Pooja",
  },
];

let create_card = JSON.parse(localStorage.getItem("carddetails"));
console.log(create_card);
for (let i = 0; i < create_card.length; i++) {
  json.push(create_card[i]);
  console.log(json);
}

for (let i = 0; i < json.length; i++) {
  let container_div;
  let card_div;
  let anchor;
  let span;
  let image;
  let h4_tag;
  let progress_div;
  let b_tag;
  let progress_tag;
  let progress_span_tag;
  let a_span_like;
  let image_like;
  let a_span_share;
  let image_share;
  let amount_sec;
  let txt_amount;
  let cash;
  let count;
  let user_div;
  let user_name;
  let name;

  let amount = json[i]["amount_raised"];
  let expected_amount = json[i]["expected_amt"];

  let percentage = Math.floor((amount / expected_amount) * 100);

  // console.log("Percentage " + percentage)

  //  const percentage =

  //   <div class="container">..</div>
  // container_div = document.createElement("div");
  // container_div.setAttribute("class", "container");

  //   <div class="box"></div>
  card_div = document.createElement("div");
  card_div.setAttribute("class", "box");
  // container_div.append(card_div);

  //<a></a>
  anchor = document.createElement("div");

  // anchor.setAttribute("href", "../../webpage/donate/story.html");
  // anchor.setAttribute("style", "text-decoration:none;");
  card_div.append(anchor);

  //   <span class="linkspanner"></span>
  // span = document.createElement("span");
  // span.setAttribute("class", "linkspanner");
  // anchor.append(span);

  //   <img class="image" src="../../Assets/images/education.jpg" alt="education" />
  image = document.createElement("img");
  image.setAttribute("class", "image");
  image.setAttribute("src", json[i]["img"]);
  image.setAttribute("onclick", "redirect()");
  image.setAttribute("alt", "education");
  anchor.append(image);

  //   <h4></h4>
  h4_tag = document.createElement("h4");
  h4_tag.innerText = json[i]["title"];
  anchor.append(h4_tag);

  //   <div class="progress-sec"></div>
  progress_div = document.createElement("div");
  progress_div.setAttribute("class", "progress-sec");
  anchor.append(progress_div);

  //   <b> 20%</b>

  b_tag = document.createElement("b");
  b_tag.innerText = percentage + "%";
  progress_div.append(b_tag);

  //   <progress id="file" value="32" max="100">20%</progress>
  progress_tag = document.createElement("progress");
  progress_tag.setAttribute("id", "file");
  progress_tag.setAttribute("value", percentage);
  progress_tag.setAttribute("max", "100");
  progress_div.append(progress_tag);

  //span
  progress_span_tag = document.createElement("span");
  progress_span_tag.setAttribute("class", "like");
  progress_div.append(progress_span_tag);

  // img

  image_like = document.createElement("img");
  image_like.setAttribute("id", json[i]["product_id"]);
  image_like.setAttribute("onclick", "editCard(this.id)");
  image_like.setAttribute(
    "src",
    "../../Assets/images/icons8-edit-60-removebg-preview.png"
  );

  image_like.setAttribute("alt", "Like");
  image_like.setAttribute("class", "icon-like");
  image_like.setAttribute("width", "30px");
  progress_span_tag.append(image_like);

  // a
  a_span_share = document.createElement("a");
  a_span_share.setAttribute("href", "#");
  progress_span_tag.append(a_span_share);

  // img
  image_share = document.createElement("img");
  image_share.setAttribute("src", "../../Assets/images/share.png");
  image_share.setAttribute("class", "share");
  image_share.setAttribute("alt", "share");
  image_share.setAttribute("width", "30px");
  a_span_share.append(image_share);

  // <div class="amount">
  amount_sec = document.createElement("div");
  amount_sec.setAttribute("class", "amount");
  progress_div.append(amount_sec);

  // <span id="txt-amt"></span>
  txt_amount = document.createElement("span");
  txt_amount.setAttribute("id", "txt-amt");
  txt_amount.innerText = "Raised :";
  amount_sec.append(txt_amount);

  // <span id="cash"></span>
  cash = document.createElement("span");
  cash.setAttribute("id", "cash");

  cash.innerHTML = "RS." + json[i]["amount_raised"] + "&nbsp" + "&nbsp";

  amount_sec.append(cash);

  // let plus;
  // plus = document.createElement("i");
  // plus.setAttribute("class", "fa fa-plus");
  // plus.setAttribute("style", "font-size:22px");
  // plus.setAttribute("value", "+");
  // plus.innerHTML = "&nbsp" + "&nbsp";
  // plus.setAttribute("onclick", "plus()");
  // amount_sec.append(plus);

  // let minus;
  // minus = document.createElement("i");
  // minus.setAttribute("class", "fa fa-minus");
  // minus.setAttribute("style", "font-size:22px");
  // amount_sec.append(minus);

  // // <span class="count"></span>
  // count = document.createElement("span");
  // count.setAttribute("class", "count");
  // count.innerText = json[i]["supporters"];
  // progress_div.append(count);

  // <div class="user"></div>
  user_div = document.createElement("div");
  user_div.setAttribute("class", "user");
  anchor.append(user_div);

  // <span class="name-label"></span>
  user_name = document.createElement("span");
  user_name.setAttribute("class", "name-label");
  user_name.innerText = "Created by";
  user_div.append(user_name);

  // <span class="name"></span>
  name = document.createElement("span");
  name.setAttribute("class", "name");
  name = innerText = json[i]["fundraiser"];
  user_div.append(name);

  // console.log(json);
  document.querySelector(".container").append(card_div);
}

function editCard(e) {
  window.location.href = "../../webpage/header/edit.html";
  let editArray = [];
  let eId = e;
  console.log(eId);
  let editObject = {
    product_id: eId,
  };

  console.log(editObject);

  editArray.push(editObject);

  console.log(editArray);
  localStorage.setItem("updateData", JSON.stringify(editArray));
}

function redirect() {
  window.location.href = "../../webpage/donate/story.html";
}
