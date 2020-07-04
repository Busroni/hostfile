const sButton = document.querySelector("#searchButton")

const url = 'https://www.blibli.com/backend/search/products?searchTerm='

		const content = document.querySelector("#preload")

sButton.addEventListener("click", () => 
{
		const sInput = document.querySelector("#searchInput").value
		console.log(sInput)


		content.innerHTML = `<center><div class="spinner-border text-dark" role="status"><center>`
		getAPI(sInput)
	})

let input = document.querySelector("#searchInput")
input.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {

    const sInput = document.querySelector("#searchInput").value
    content.innerHTML = `<center><div class="spinner-border text-dark" role="status"><center>`
	getAPI(sInput)
  }
})

const getAPI = (key) => {
	fetch(`${url}${key}`).then((respone) => {
		
		content.innerHTML = ' '

		console.log(respone)
		let products = respone.json()
		console.log(products)

		return products

	}).then(showProducts).catch(showError)
}

const showProducts = (barang) => {
	console.log(barang)

	let produk

	produk = barang.data.products

	const area = document.querySelector("#area")
		area.innerHTML = ''

	produk.forEach((p) => {

		console.log(p)
		area.innerHTML += 
		`<div class="col-md-3 col-sm-6 my-3">
		<div class="card" style="width: 17rem;box-shadow: 0px 0px 35px -11px rgba(0,0,0,0.35);">
		  <img src="${p.images[0]}" class="card-img-top" alt="...">
		  <div class="card-body" style="background-color: #f8e1f4">
		    <h6 class="card-title">${p.name}</h6>
		    <p class="card-text">Price: <b>${p.price.priceDisplay}</b></p>
		    <p class="card-text">Rating: <b>${p.review.rating}</b> Ulasan:<b>${p.review.count}</p>
		    <a href="#" class="btn btn-primary" style="background-color:#be79df; border-color:white">Cek Barang</a>
		  </div>
		</div>`
	})
}

const showError = (err) =>{
	console.log('Error : ',err)
	area.innerHTML =
	`<div class="alert alert-danger" style="width:1366px; height:720px;box-shadow: 0px 0px 35px -11px rgba(0,0,0,0.35);">
  	<strong>Error!</strong> Cek Koneksi Internet Anda !!!
  	<h1 style="text-align: center;font-size:150px; margin-top:200px;font-family: Roboto;" >No internet</h1>
	</div>`
}
