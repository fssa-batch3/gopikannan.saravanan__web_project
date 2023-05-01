let footmain;
footmain = document.createElement("div");
footmain.setAttribute("class", "footmain");

let footpart;
footpart = document.createElement("div");
footpart.setAttribute("class", "footerpart");
footmain.append(footpart);

let footHead;
footHead = document.createElement("div");
footHead.setAttribute("class", "foot-head");
footpart.append(footHead);

let donateTxt;
donateTxt = document.createElement("p");
donateTxt.innerText = "Donate now";
footHead.append(donateTxt);
