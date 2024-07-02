
export default class Ui{
    constructor(categoreOption){
        this.categoreOption=categoreOption
    }
    async getAPI(){
      try{
        let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.categoreOption}`,{
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "b7ddeaba2emsh4c7f9a279de19b4p17f62fjsn9ef33d17e7d9",
              "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
            },
        
           
          })
         let  response = await api.json()
         return response}
        catch{
         document.getElementById("card").innerHTML=` <div class="load position-fixed start-0 end-0 top-0 bottom-0">
          <span class="loader position-absolute top-50 start-50"></span>
        </div>`
        }    
      
        }}
        
        ' use strict'
        export class display {
          constructor(response) {
            this.response = response;
          }
        
          display() {
            let cart = '';
            for (let i = 0; i < this.response.length; i++) {
              cart += `
                <div class="col-lg-3 col-md-4 col-sm-6">
                  <div class="card" data-index="${i}">
                    <div class="px-3 pt-3">
                      <img src="${this.response[i].thumbnail}" alt="">
                    </div>
                    <div class="header rounded-3 p-3 pb-0 my-2 d-flex justify-content-between">
                      <h3 class="h6 my-2">${this.response[i].title}</h3>
                      <span class="fs-6 rounded-3 p-1 mb-2">Free</span>
                    </div>
                    <p class="text-center mb-5 px-3">${this.response[i].short_description}</p>
                    <div class="img-footer position-absolute bottom-0 start-0 end-0 p-2 px-3 d-flex justify-content-between">
                      <span class="rounded-1">MMORPG</span>
                      <span class="rounded-1">${this.response[i].platform}</span>
                    </div>
                  </div>
                </div>`;
            }
        
            const cardContainer = document.getElementById("card");
            cardContainer.innerHTML = cart;
            console.log("Cards displayed");
        
            cardContainer.querySelectorAll('.card').forEach(card => {
              card.addEventListener('click', (event) => {
                const index = event.currentTarget.getAttribute('data-index');
                this.handleCardClick(index);
              });
            });
          }
        
          async handleCardClick(index) {
            const selectedResponse = this.response[index];
            document.getElementById("card").innerHTML = `
              <div class="load position-fixed start-0 end-0 top-0 bottom-0">
                <span class="loader position-absolute top-50 start-50"></span>
              </div>`;
            

            await new Promise(resolve => setTimeout(resolve, 1000));
   
            document.querySelector(".home").classList.add("d-none");
            document.querySelector(".details").classList.remove("d-none");
            document.querySelector(".details-main").classList.remove("d-none");
            console.log(selectedResponse);
            
            this.displayDetails(selectedResponse);
          }
        
          displayDetails(selectedResponse) {
            const detailsContainer = document.querySelector(".details");
            const cart = `
           
                <div class="row mt-5">
                  <div class="col-md-3">
                    <div>
                      <img src="${selectedResponse.thumbnail}" alt="">
                    </div>
                  </div>
                  <div class="col-md-9">
                    <div>
                      <h3>Title: ${selectedResponse.title}</h3>
                      <p>Category: <span class="rounded-3">${selectedResponse.genre}</span></p>
                      <p>Platform: <span class="rounded-3">${selectedResponse.platform}</span></p>
                      <p class="text">${selectedResponse.short_description}</p>
                      <a class="btn btn-outline-warning text-white" target="_blank" href="${selectedResponse.game_url}">Show Game</a>
                    </div>
                  </div>
                </div>
              </div>`;
            detailsContainer.innerHTML = cart;
          
       
          }
        }
        
        
        
        
