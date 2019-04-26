/*
- - - get data from json-ld and set in HTML - - -
*/

function dataCouple() {
  var coaches = JSON.parse(document.querySelector('#coaches').innerText);
  document.title=coaches.mainEntityOfPage.headline;
  document.getElementById('headerTitle').innerText=coaches.mainEntityOfPage.headline;
  document.getElementById('assetId').innerText=coaches.identifier;
  document.getElementById('object').innerText=coaches.object;
  document.getElementById('participant').innerText=coaches.participant;
  document.getElementById('agent').innerText=coaches.agent;
  document.getElementById('toLocation').innerText=coaches.toLocation;
  document.getElementById('instrument').innerText=coaches.instrument;
  document.getElementById('lastReviewed').innerText=coaches.mainEntityOfPage.lastReviewed;
  document.getElementById('lawfulBasis').innerText=coaches.isRelatedTo[0].name;
  document.getElementById('legislation').innerText=coaches.isRelatedTo[0].description;
  document.getElementById('legislation').href=coaches.isRelatedTo[0].url;
}

dataCouple();
