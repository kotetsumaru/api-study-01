//Dom取得
const lists = document.getElementById("lists");
const select = document.getElementById("selector");

//メソッド

async function covidData() {
  const res = await fetch("https://www.stopcovid19.jp/data/covid19japan.json");
  const covidLists = await res.json();
  console.log(covidLists);

  covidLists.area.forEach(function (covidList) {
    const list = document.createElement("dd");
    list.innerText = `${covidList.name_jp} : 現在の感染者数 ${covidList.ncurrentpatients}人`;
    lists.appendChild(list);
  });
}

async function changeData() {
  const res = await fetch("https://www.stopcovid19.jp/data/covid19japan.json");
  const covidLists = await res.json();
  console.log(covidLists);

  selectChange(covidLists);
}

function selectChange(covidLists) {
  while (lists.firstChild) {
    lists.removeChild(lists.firstChild);
  }
  lists.innerText = "コロナウイルス状況";
  const selected = select.value;
  switch (selected) {
    case "currentpatients":
      covidLists.area.forEach(function (covidList) {
        console.log(selected);
        const list = document.createElement("dd");
        list.innerText = `${covidList.name_jp} : 現在の感染者数 ${covidList.ncurrentpatients}人`;
        lists.appendChild(list);
      });
      break;
    case "exits":
      covidLists.area.forEach(function (covidList) {
        console.log(selected);
        const list = document.createElement("dd");
        list.innerText = `${covidList.name_jp} : 回復者数 ${covidList.nexits}人`;
        lists.appendChild(list);
      });
      break;
    case "deaths":
      covidLists.area.forEach(function (covidList) {
        console.log(selected);
        const list = document.createElement("dd");
        list.innerText = `${covidList.name_jp} : 死者数 ${covidList.ndeaths}人`;
        lists.appendChild(list);
      });
      break;

    default:
      break;
  }
}
//イベント
window.addEventListener("load", covidData);
select.addEventListener("change", changeData);
