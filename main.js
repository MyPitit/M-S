function createTable(allData) {

    var content = document.createElement('table');

    for ( var i = 0; i < allData.length; i++ ) {

        var tableRow = document.createElement('tr');
        tableRow.classList.add('products');

        var title = document.createElement('td');
        var titleData = document.createTextNode(allData[i].title);
        title.classList.add('cell');
        title.setAttribute('id', 'title');
        title.appendChild(titleData);
        tableRow.appendChild(title);

        var price = document.createElement('td');
        var priceData = document.createTextNode(allData[i].price);
        price.setAttribute('id', 'price');
        price.classList.add('cell');
        price.appendChild(priceData);
        tableRow.appendChild(price);

        if ( allData[i].stars != undefined ) {
            var stars = document.createElement('td');
            var starsData = document.createTextNode(allData[i].stars);
            stars.classList.add('cell');
            stars.setAttribute('id', 'stars');
            stars.appendChild(starsData);
            tableRow.appendChild(stars);
        }

        if ( allData[i].promotion != undefined ) {

            if ( allData[i].promotion == true ) {
                var promotion = document.createElement('td');
                var promotionData = document.createTextNode(allData[i].promotion);
                promotion.classList.add('cell');
                promotion.setAttribute('id', 'promotion');
                promotion.appendChild(promotionData);
                tableRow.appendChild(promotion);
            }
        }
        content.appendChild(tableRow);
    }
    document.getElementById('table').appendChild(content);
}

getJSONData(createTable);
