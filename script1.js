async function start(){
    const response = await fetch("https://dog.ceo/api/breeds/list/all")
    const data = await response.json()
    createBreedlist(data.message)
}  

start()

function createBreedlist(breedList){
    document.getElementById('breed').innerHTML = `
    <select class="custom-select " onchange = "loadBreedList(this.value)">
            <option>Choose a Dog Breed</option>
            ${Object.keys(breedList).map(function (breeds){
                return `<option>${breeds}</option>`

            }).join('')}
        </select>
    `
}


async function loadBreedList(breedName){
    if ( breedName != "Choose a Dog Breed"){
      const response = await fetch(`https://dog.ceo/api/breed/${breedName}/images`)
      const data = await response.json();
      console.log(data)
      createimages (data.message)  
    }

}

function createimages (images) {
    console.log(images)
    document.getElementById('slideshow').innerHTML = `
    <img src="${images[0]}" class = "img-fluid img-thumbnail rounded">`
}

