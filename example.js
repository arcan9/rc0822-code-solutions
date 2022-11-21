var cardList = document.getElementById('card-list');

function getCards(page) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://protected-taiga-89091.herokuapp.com/api/card?pageSize=10&page=' + page);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);

    for (var i = 0; i < xhr.response.data.length; i++) {
      var list = document.createElement('li');
      list.textContent = xhr.response.data[i].englishName;
      cardList.appendChild(list);
    }
  });
  xhr.send();
}

getCards(3);
