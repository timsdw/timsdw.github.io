/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('h0').innerText=coaches.breadcrumb.itemListElement[0].item.name;
  document.getElementById('h0').href=coaches.breadcrumb.itemListElement[0].item.url;
  document.getElementById('h1').innerText=coaches.breadcrumb.itemListElement[1].item.name;
  document.getElementById('h1').href=coaches.breadcrumb.itemListElement[1].item.url;
  document.getElementById('h2').innerText=coaches.breadcrumb.itemListElement[2].item.name;
  document.getElementById('h2').href=coaches.breadcrumb.itemListElement[2].item.url;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('a0').innerText=coaches.itemListElement[0].item.name;
  document.getElementById('a0').href=coaches.itemListElement[0].item.url;
  document.getElementById('a1').innerText=coaches.itemListElement[1].item.name;
  document.getElementById('a1').href=coaches.itemListElement[1].item.url;
  document.getElementById('a2').innerText=coaches.itemListElement[2].item.name;
  document.getElementById('a2').href=coaches.itemListElement[2].item.url;
  document.getElementById('a3').innerText=coaches.itemListElement[3].item.name;
  document.getElementById('a3').href=coaches.itemListElement[3].item.url;
  document.getElementById('a4').innerText=coaches.itemListElement[4].item.name;
  document.getElementById('a4').href=coaches.itemListElement[4].item.url;
  document.getElementById('a5').innerText=coaches.itemListElement[5].item.name;
  document.getElementById('a5').href=coaches.itemListElement[5].item.url;
  document.getElementById('a6').innerText=coaches.itemListElement[6].item.name;
  document.getElementById('a6').href=coaches.itemListElement[6].item.url;
  document.getElementById('a7').innerText=coaches.itemListElement[7].item.name;
  document.getElementById('a7').href=coaches.itemListElement[7].item.url;
  document.getElementById('a8').innerText=coaches.itemListElement[8].item.name;
  document.getElementById('a8').href=coaches.itemListElement[8].item.url;
  document.getElementById('a9').innerText=coaches.itemListElement[9].item.name;
  document.getElementById('a9').href=coaches.itemListElement[9].item.url;
  document.getElementById('a10').innerText=coaches.itemListElement[10].item.name;
  document.getElementById('a10').href=coaches.itemListElement[10].item.url;
  document.getElementById('a11').innerText=coaches.itemListElement[11].item.name;
  document.getElementById('a11').href=coaches.itemListElement[11].item.url;
  document.getElementById('a12').innerText=coaches.itemListElement[12].item.name;
  document.getElementById('a12').href=coaches.itemListElement[12].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[13].item.name;
  document.getElementById('a13').href=coaches.itemListElement[13].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[14].item.name;
  document.getElementById('a13').href=coaches.itemListElement[14].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[15].item.name;
  document.getElementById('a13').href=coaches.itemListElement[15].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[16].item.name;
  document.getElementById('a13').href=coaches.itemListElement[16].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[17].item.name;
  document.getElementById('a13').href=coaches.itemListElement[17].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[18].item.name;
  document.getElementById('a13').href=coaches.itemListElement[18].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[19].item.name;
  document.getElementById('a13').href=coaches.itemListElement[19].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[20].item.name;
  document.getElementById('a13').href=coaches.itemListElement[20].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[21].item.name;
  document.getElementById('a13').href=coaches.itemListElement[21].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[22].item.name;
  document.getElementById('a13').href=coaches.itemListElement[22].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[23].item.name;
  document.getElementById('a13').href=coaches.itemListElement[23].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[24].item.name;
  document.getElementById('a13').href=coaches.itemListElement[24].item.url;
  document.getElementById('a13').innerText=coaches.itemListElement[25].item.name;
  document.getElementById('a13').href=coaches.itemListElement[25].item.url;
}

dataCouple();
