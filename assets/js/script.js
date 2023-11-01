const container = document.querySelector('.containerr')

// fetch ile sorgu atilmasi

// const fetchData = fetch('https://api.tvmaze.com/shows')
// .then((data)=>data.json())
// .then((data)=>data.forEach(element => render(element))) // Her bir data ucun card yaradilib container'e elave olunmasi

// axios ile sorgu atilmasi

async function getData(){
    const axiosData = await axios('https://api.tvmaze.com/shows')
    await axiosData.data.forEach(element => { // Her bir data ucun card yaradilib container'e elave olunmasi
        render(element)
        
    });
}
getData()

function render(element) {
    container.innerHTML += `
        <div class="card">
        <img class="card-img-top" src="${element.image.medium}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <p class="card-text">${element.summary.slice(0, 400-3)}...</p>
          <p class="card-text">Rating: ${element.rating.average}</p>
          <p class="card-text">Language: ${element.language}</p>
          <a href="#" class="btn btn-primary">More</a>
        </div>
      </div>
        `
}