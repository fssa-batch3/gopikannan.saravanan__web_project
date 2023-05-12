const json = [];

let create_card = JSON.parse(localStorage.getItem("carddetails"));

for (let i = 0; i < create_card.length; i++) {
  json.push(create_card[i]);
}
console.log(json);

// url params
let fundraiseurl = window.location.search;
let urlParamsId = new URLSearchParams(fundraiseurl);
let userfundraiseId = urlParamsId.get("userid");

for (let i = 0; i < json.length; i++) {
  let amount_raised = json[i]["amount_raised"];

  let expected_amount = json[i]["expected_amt"];
  let percentage = Math.floor((amount_raised / expected_amount) * 100);

  let donors = JSON.parse(localStorage.getItem("donerDonatedetails"));

  if (
    (amount_raised == expected_amount || amount_raised >= expected_amount) &&
    json[i]["userId"] == userfundraiseId
  ) {
    json[i]["amout"] = "reached";

    let box1andbox2;
    box1andbox2 = document.createElement("div");
    box1andbox2.setAttribute("class", "box1-box2-container");

    let box;
    box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.backgroundColor = "#ececec";
    box1andbox2.append(box);

    let anchorDonate;
    anchorDonate = document.createElement("div");
    anchorDonate.setAttribute("style", "text-decoration: none");
    anchorDonate.innerHTML = `<span class="textAmt">Expected Amount reached</span>`;
    box.append(anchorDonate);

    let coverimg;
    coverimg = document.createElement("img");
    coverimg.setAttribute("class", "image");
    coverimg.setAttribute("height", "270px");
    coverimg.setAttribute("src", json[i]["img"]);
    coverimg.style.opacity = "0.7";
    coverimg.setAttribute("onclick", "direct()");

    coverimg.setAttribute("alt", "wsa we save animals");
    anchorDonate.append(coverimg);

    let title_;
    title_ = document.createElement("h4");
    title_.innerText = json[i]["title"];
    anchorDonate.append(title_);

    let progress_div;
    progress_div = document.createElement("div");
    progress_div.setAttribute("class", "progress-sec");
    anchorDonate.append(progress_div);

    let b_tag;
    b_tag = document.createElement("b");
    b_tag.innerText = percentage + "%";
    progress_div.append(b_tag);

    let progress_tag;
    progress_tag = document.createElement("progress");
    progress_tag.setAttribute("id", "file");
    progress_tag.setAttribute("value", percentage);
    progress_tag.setAttribute("max", "100");
    progress_div.append(progress_tag);

    let progress_span_tag;
    progress_span_tag = document.createElement("span");
    progress_span_tag.setAttribute("class", "like");

    progress_div.append(progress_span_tag);

    let image_like;
    image_like = document.createElement("img");
    image_like.setAttribute("id", json[i]["product_id"]);
    image_like.setAttribute("class", "icon-like");
    image_like.setAttribute("onclick", "editCard(this.id)");
    image_like.setAttribute(
      "src",
      "../../Assets/images/icons8-edit-60-removebg-preview.png"
    );
    image_like.setAttribute("width", "30px");
    progress_span_tag.append(image_like);

    let shareImg;
    shareImg = document.createElement("img");
    shareImg.setAttribute("src", "../../Assets/images/share.png");
    shareImg.setAttribute("alt", "share");
    shareImg.setAttribute("class", "share");
    shareImg.setAttribute("width", "30px");
    progress_span_tag.append(shareImg);

    let amount;
    amount = document.createElement("div");
    amount.setAttribute("class", "amount");
    progress_div.append(amount);

    let textamt;
    textamt = document.createElement("span");
    textamt.setAttribute("id", "txt-amt");
    textamt.innerText = "Raised :";
    amount.append(textamt);

    let cash;
    cash = document.createElement("span");
    cash.setAttribute("id", "cash");
    cash.innerHTML = "RS." + json[i]["amount_raised"] + "&nbsp" + "&nbsp";
    amount.append(cash);

    let user_div;
    user_div = document.createElement("div");
    user_div.setAttribute("class", "user");
    anchorDonate.append(user_div);

    let user_name;
    user_name = document.createElement("span");
    user_name.setAttribute("class", "name-label");
    user_name.innerHTML = "Created by" + "&nbsp";
    user_div.append(user_name);

    let nameFundraise;
    nameFundraise = document.createElement("span");
    nameFundraise.setAttribute("class", "nameFundraiser");
    nameFundraise.innerText = json[i]["fundraiser"];
    user_div.append(nameFundraise);

    // supporterbox

    let supporterbox;
    supporterbox = document.createElement("div");
    supporterbox.setAttribute("class", "supporters-box");
    supporterbox.innerHTML = `<div class="supporterhead">Donors List</div>`;

    let cardfundraiseid = json[i]["product_id"];
    console.log(cardfundraiseid);

    for (let i = 0; i < donors.length; i++) {
      if (cardfundraiseid == donors[i]["fundraiseId"]) {
        let supporter = document.createElement("div");
        supporter.innerHTML = ` 
      <span class="supporter-name">${donors[i]["donaterName"]}</span>
      <span class="contribution">${donors[i]["donaterContribution"]} RS</span>
    
    <hr />`;
        supporterbox.append(supporter);
      }
    }

    box1andbox2.append(supporterbox);

    document.querySelector(".container").append(box1andbox2);

    // searchbar feature function to query search

    let inputSearch = document.getElementById("search");
    const cards = document.getElementsByClassName("box1-box2-container");
    let container_div = document.getElementById("container");
    inputSearch.addEventListener("input", () => {
      for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        if (
          element.innerHTML
            .toLowerCase()
            .includes(inputSearch.value.toLowerCase())
        ) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    });
  }

  if (json[i]["amout"] == "unreach" && json[i]["userId"] == userfundraiseId) {
    let box1andbox2;
    box1andbox2 = document.createElement("div");
    box1andbox2.setAttribute("class", "box1-box2-container");

    let box;
    box = document.createElement("div");
    box.setAttribute("class", "box");
    box1andbox2.append(box);

    let anchorDonate;
    anchorDonate = document.createElement("div");
    anchorDonate.setAttribute("style", "text-decoration: none");
    box.append(anchorDonate);

    let anchorimg;
    anchorimg = document.createElement("a");
    anchorimg.setAttribute(
      "href",
      "../../webpage/donate/story.html?product_id=" +
        json[i]["product_id"] +
        "&userid=" +
        json[i]["userId"]
    );
    anchorDonate.append(anchorimg);

    let coverimg;
    coverimg = document.createElement("img");
    coverimg.setAttribute("class", "image");
    coverimg.setAttribute("height", "270px");
    coverimg.setAttribute("src", json[i]["img"]);
    coverimg.setAttribute("onclick", "redirect()");
    coverimg.setAttribute("alt", "wsa we save animals");
    anchorimg.append(coverimg);

    let title_;
    title_ = document.createElement("h4");
    title_.innerText = json[i]["title"];
    anchorDonate.append(title_);

    let progress_div;
    progress_div = document.createElement("div");
    progress_div.setAttribute("class", "progress-sec");
    anchorDonate.append(progress_div);

    let b_tag;
    b_tag = document.createElement("b");
    b_tag.innerText = percentage + "%";
    progress_div.append(b_tag);

    let progress_tag;
    progress_tag = document.createElement("progress");
    progress_tag.setAttribute("id", "file");
    progress_tag.setAttribute("value", percentage);
    progress_tag.setAttribute("max", "100");
    progress_div.append(progress_tag);

    let progress_span_tag;
    progress_span_tag = document.createElement("span");
    progress_span_tag.setAttribute("class", "like");
    progress_div.append(progress_span_tag);

    let image_like;
    image_like = document.createElement("img");
    image_like.setAttribute("id", json[i]["product_id"]);
    image_like.setAttribute("class", "icon-like");
    image_like.setAttribute("onclick", "editCard(this.id)");
    image_like.setAttribute(
      "src",
      "../../Assets/images/icons8-edit-60-removebg-preview.png"
    );
    image_like.setAttribute("width", "30px");
    progress_span_tag.append(image_like);

    let shareImg;
    shareImg = document.createElement("img");
    shareImg.setAttribute("src", "../../Assets/images/share.png");
    shareImg.setAttribute("alt", "share");
    shareImg.setAttribute("class", "share");
    shareImg.setAttribute("width", "30px");
    progress_span_tag.append(shareImg);

    let amount;
    amount = document.createElement("div");
    amount.setAttribute("class", "amount");
    progress_div.append(amount);

    let textamt;
    textamt = document.createElement("span");
    textamt.setAttribute("id", "txt-amt");
    textamt.innerText = "Raised :";
    amount.append(textamt);

    let cash;
    cash = document.createElement("span");
    cash.setAttribute("id", "cash");
    cash.innerHTML = "RS." + json[i]["amount_raised"] + "&nbsp" + "&nbsp";
    amount.append(cash);

    let user_div;
    user_div = document.createElement("div");
    user_div.setAttribute("class", "user");
    anchorDonate.append(user_div);

    let user_name;
    user_name = document.createElement("span");
    user_name.setAttribute("class", "name-label");
    user_name.innerHTML = "Created by" + "&nbsp";
    user_div.append(user_name);

    let nameFundraise;
    nameFundraise = document.createElement("span");
    nameFundraise.setAttribute("class", "nameFundraiser");
    nameFundraise.innerText = json[i]["fundraiser"];
    user_div.append(nameFundraise);

    // supporterbox

    let supporterbox;
    supporterbox = document.createElement("div");
    supporterbox.setAttribute("class", "supporters-box");
    supporterbox.innerHTML = `<div class="supporterhead">Donors List</div>`;

    let cardfundraiseid = json[i]["product_id"];
    console.log(cardfundraiseid);

    console.log(donors);
    if (donors !== null) {
      for (let i = 0; i < donors.length; i++) {
        if (cardfundraiseid == donors[i]["fundraiseId"]) {
          let supporter = document.createElement("div");
          supporter.innerHTML = ` 
      <span class="supporter-name">${donors[i]["donaterName"]}</span>
      <span class="contribution">${donors[i]["donaterContribution"]} RS</span>
    
    <hr />`;
          supporterbox.append(supporter);
        }
      }
    } else {
      let supporter = document.createElement("div");
      supporter.innerHTML = ` 
      <span class="supporter-name"></span>
      <span class="contribution"></span>
    
    <hr />`;
      supporterbox.append(supporter);
    }
    box1andbox2.append(supporterbox);

    document.querySelector(".container").append(box1andbox2);

    // searchbar feature function to query search

    let inputSearch = document.getElementById("search");
    const cards = document.getElementsByClassName("box1-box2-container");

    inputSearch.addEventListener("input", () => {
      for (let i = 0; i < cards.length; i++) {
        const element = cards[i];
        if (
          element.innerHTML
            .toLowerCase()
            .includes(inputSearch.value.toLowerCase())
        ) {
          element.style.display = "block";
        } else {
          element.style.display = "none";
        }
      }
    });
    // searchbar feature function to query search
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
}

function direct() {
  alert("Expected Amount Reached");
}
