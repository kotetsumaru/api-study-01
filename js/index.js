//Dom取得
const lists = document.getElementById("lists");
const select = document.getElementById("selector");

//メソッド
async function getData() {
  const res = await fetch("https://www.stopcovid19.jp/data/covid19japan.json");
  const covidLists = await res.json();
  return covidLists;
}

async function covidData() {
  const covidLists = await getData();
  console.log(covidLists);
  selectData(covidLists);
}

async function changeData() {
  const covidLists = await getData();
  console.log(covidLists);
  removePrevList();
  selectData(covidLists);
}

function removePrevList() {
  while (lists.firstChild) {
    lists.removeChild(lists.firstChild);
  }
  lists.innerText = "コロナウイルス状況";
}

function selectData(covidLists) {
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
