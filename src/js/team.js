const team = [{
    name: "Eva Green",
    pos: "/ HR",
    descr: "Lorem Ipsum is not simply is an action designer random text. <br> It has roots in a piece.",
    photo: "img/team/team1.jpg",
    socials: {
        facebook: "kek",
        twitter: "lol",
        message: "evagreen",
        dribbble: "chek",
    },
},
{
    name: "Al Rayhan",
    pos: "/ UI Designer",
    descr: "Lorem Ipsum is not simply is an action designer random text. <br> It has roots in a piece.",
    photo: "img/team/team2.jpg",
    socials: {
        facebook: "kek",
        twitter: "lol",
        message: "alrayhan",
        dribbble: "chek",
    },
},
{
    name: "Brad Pitt",
    pos: "/ Web-developer",
    descr: "Lorem Ipsum is not simply is an action designer random text. <br> It has roots in a piece.",
    photo: "img/team/team3.jpg",
    socials: {
        facebook: "kek",
        twitter: "lol",
        message: "bradpitt",
        dribbble: "chek",
    },
},
{
    name: "Ryan Gosling",
    pos: "/ CEO",
    descr: "Lorem Ipsum is not simply is an action designer random text. <br> It has roots in a piece.",
    photo: "img/team/team4.jpg",
    socials: {
        facebook: "kek",
        twitter: "lol",
        message: "ryangosling",
        dribbble: "chek",
    },
},
{
    name: "Margot Robbie",
    pos: "/ BA",
    descr: "Lorem Ipsum is not simply is an action designer random text. <br> It has roots in a piece.",
    photo: "img/team/team5.jpg",
    socials: {
        facebook: "kek",
        twitter: "lol",
        message: "margotrobbie",
        dribbble: "chek",
    },
},
{
    name: "Charlize Theron",
    pos: "/ QA",
    descr: "Lorem Ipsum is not simply is an action designer random text. <br> It has roots in a piece.",
    photo: "img/team/team6.jpg",
    socials: {
        facebook: "kek",
        twitter: "lol",
        message: "charlizetheron",
        dribbble: "chek",
    },
}];

let row = document.createElement("div");
row.className = "row";

for (let i = 0; i < team.length; i++) {
    let member = document.createElement("div"),
        img = document.createElement("img"),
        popup = document.createElement("div"),
        popupTitle = document.createElement("div"),
        popupPos = document.createElement("div"),
        popupText = document.createElement("div"),
        popupIconsWrapper = document.createElement("div");
    //member-main
    member.className = "col-6 col-sm-4 col-md-4";
    if (i > 1) {
        member.classList.add("team_padding_xs");
        if (i > 2) {
            member.classList.add("team_padding");
        }
    }
    //img
    img.setAttribute("alt", ("member" + i));
    img.setAttribute("src", team[i].photo);
    img.className = "team__img";
    member.append(img);
    //popup-main
    popup.className = "popup";
    member.append(popup);
    //popup-title
    popupTitle.className = "popup__title";
    popupTitle.innerHTML = team[i].name;
    popup.append(popupTitle);
    //popup-pos
    popupPos.className = "popup__pos";
    popupPos.innerHTML = team[i].pos;
    popupTitle.append(popupPos);
    //popup-text
    popupText.className = "popup__text";
    popupText.innerHTML = team[i].descr;
    popup.append(popupText);
    //popupIconsWrapper
    popupIconsWrapper.className = "popup__icons-wrapper";
    popup.append(popupIconsWrapper);
    //socials
    for (let key in team[i].socials) {
        let link = document.createElement('a'),
            span = document.createElement('span');
        link.className = "popup__icon";
        link.setAttribute("href", ("https://" + team[i].socials[key]));
        span.className = "icon-" + key;
        link.append(span);
        popupIconsWrapper.append(link);
    }
    row.append(member);
}

let rowsWrapper = document.querySelector(".team__rows-wrapper");
rowsWrapper.append(row);