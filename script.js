

const api_url = 'https://635391d2ccce2f8c02f907b5.mockapi.io/penanggulangan';

const main = document.getElementById('col colpencegahan1');

getData(api_url);

function getData(url){
    fetch(url).then(response => response.json()).then(data => {
        console.log(data); 
        console.log("aloooww")
        console.log(data.results)


        showData(data.results);
    })
}

function showData(data){

    data.forEach(penanggulangan => {
        const {img, konten, title} = penanggulangan;
        const DataKu = document.createElement('div');
        DataKu.classList.add('col colpencegahan');
        DataKu.innerHTML = `
        <img src="${img}" class="img-thumbnail" width="200px">
        <h3>${title}</h3>
        <p>${konten}</p>
        `
        main.appendChild(DataKu);
    })

}


//------------   const url = 'https://635391d2ccce2f8c02f907b5.mockapi.io';

// let containerPertama = document.getElementById("colpencegahan1");


// async function getMockApi(url) {

//     const respond = await fetch(url)
//     const result = respond.json();

//     return result;
// }

// getMockApi(`${url}/penanggulangan`)

// .then(function(result){

//     containerPertama.innerHTML = '';

//     result.forEach(function(penanggulangan){
//         const {img, konten, title} = penanggulangan;
//         const DataKu = document.createElement('div');
//         DataKu.classList.add('colpencegahan');
//         DataKu.innerHTML += 
//         `
//         <img src="${img}" class="img-thumbnail" width="200px">
//         <h3>${title}</h3>
//         <p>${konten}</p>

//         `
//     });
    
// })


