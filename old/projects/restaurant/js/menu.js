$("document").ready( () =>{
    console.log(foods);

    let container = $("#food-container");

    let i;
    for (i=0; i<foods.length; i++){
        let foodName = foods[i].name;
        let foodPrice = foods[i].price;
        let foodPicture = foods[i].pict;
        let foodDescription = foods[i].description;

        let card = `
        <div class="food-item card mb-4">
            <img src="${foodPicture}">
        
            <div class="container card-body">
                <!-- Food Title -->
                <div class="row mt-3">
                    <div class="col-8">
                        <h4>${foodName}</h4>
                    </div>
                    
                    <div class="col">
                        <h5>${foodPrice}</h5>
                    </div>
                </div>
        
                <div class="row mt-2">
                    <div class="col">
                        <p>${foodDescription}</p>
                    </div>
                </div>
            </div>
        </div>`;

        container.append(card);


    }
});