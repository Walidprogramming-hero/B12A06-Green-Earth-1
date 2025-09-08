
const loadLession = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
    .then(fes => fes.json())
    .then(data => {
        displayData(data.categories)
    })
}

// active-btn//
const removeActive = () => {
    const lessonButton = document.querySelectorAll('.lession-btn')
    lessonButton.forEach((btn) => btn.classList.remove("active"))
}

// https://openapi.programming-hero.com/api/categories

const loadLavelWorld= (categoryid) => {
    
    const url = `https://openapi.programming-hero.com/api/category/${categoryid}`
    fetch(url)
    .then(free => free.json())
    .then(datas => {
        removeActive();
        const clickBtn = document.getElementById(`lession-btn-${categoryid}`)
        clickBtn.classList.add("active")
        displayLavelWorld(datas.plants)
    })
}

// modal/
const loadwordmodal =(id) => {
  const link = `https://openapi.programming-hero.com/api/plant/${id}`
  fetch(link)
  .then(modal => modal.json())
  .then(modalAll => {
    console.log(modalAll)
  displayModal(modalAll.plants)
  })
}

const displayModal = (modd) => {
  console.log(modd)
  const newModal = document.getElementById('modal')
  newModal.innerHTML = `
  
  
   
          <div class="card bg-base-100 w-full shadow-sm">
        <figure class="px-5 pt-5 flex flex-col">
        <h2 class="text-left">${modd.name}</h2>
          <img
          src="${modd.image}" class="w-full rounded-3xl object-cover h-45"
          alt="Shoes"
          class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Catagory:${modd.category}</h2>
            <h3><span class="font-bold">Price</span>:${modd.price}</h3>
            <p><span class="font-bold">Description</span>:${modd.description}</p>
             
        </div>
      </div>
  `
  document.getElementById('my_modal_5').showModal()
  
}


const displayLavelWorld = (words) => {
    
    const display = document.getElementById('cardContiner')
    display.innerHTML = "";
    words.forEach(card => {
        console.log(card)
        const newCard = document.createElement('div')
        newCard.innerHTML = `
        
        
         <div class="card">
           <div class="card bg-base-100 w-90 shadow-sm">
          <figure class=" ">
          <img src="${card.image}" class="w-full rounded-top-3xl object-cover h-60 alt="">
           </figure>
            <div class="card-body">
            <h2 onclick="loadwordmodal(${card.id})" class="card-title num cursor-pointer">${card.name}</h2>
            <p>${card.description}</p>
            <div class="card-actions">
              <div class="flex items-center gap-30">
                <button class="btn bg-[#DCFCE7] rounded-3xl text-[#15803D]">${card.category}</button>
                <p class="flex price items-center"><i class="fa-solid fa-bangladeshi-taka-sign"></i>${card.price}</p>
              </div>
               <button  class="btn clickButton bg-[#15803D] text-white w-full rounded-3xl">Add to Cart</button>
            </div>
            </div>
           </div>
           </div>
        
        `
        display.appendChild(newCard)
    })

}



const displayData = (lession) => {
    const catagory = document.getElementById('catagoryContiner')
    catagory.innerHTML ="";
    lession.forEach(element => {
        console.log(element)
        const btnDiv = document.createElement('div')
        btnDiv.innerHTML = `
        <a class="btn hover:bg-green-600 w-full text-left lession-btn" id="lession-btn-${element.id}" href="#"onclick="loadLavelWorld('${element.id}')" class="gap-y-5">${element.category_name}</a>
        
        `
        catagory.appendChild(btnDiv)
    });
}

loadLession();






// AllCard-Session-Continer







const allCardShow = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
    .then(fes => fes.json())
    .then(data => allCardDisplayShow(data.plants))
}

const allCardDisplayShow = (show) => {
// console.log(show)
const createElement = document.getElementById('cardContiner')
createElement.innerHTML=""
show.forEach(create => {
    const newElement = document.createElement('div')
    newElement.innerHTML=`
    <div class="card">
          <div class="card bg-base-100 w-96 shadow-sm">
        <figure class="px-5 pt-5">
          <img
          src="${create.image}" class="w-full rounded-3xl object-cover h-45"
          alt="Shoes"
          class="rounded-xl" />
          </figure>
          <div class="card-body">
            <h2 class="card-title num">${create.name}</h2>
            <p>${create.description}</p>
             <div class="flex gap-50">
            <button class="btn btn-xs bg-[#DCFCE7] rounded-3xl text-[#15803D]">${create.category}</button>
            <p  class="flex price items-center font-bold text-[#15803D] text-[16px]"><i class="fa-solid fa-bangladeshi-taka-sign"></i> ${create.price}</p>
          </div>
        <div class="card-actions">
          <button  class="btn clickButton bg-[#15803D] text-white rounded-3xl w-full">Add to Cart</button>
      </div>
    </div>
  </div>
         </div>
    
    `
    createElement.appendChild(newElement)
})
}


allCardShow()



// document.getElementById('clickButton').addEventListener('click', () => {
//   console.log('clickhere')
// })

document.getElementById('cardContiner').addEventListener('click', (e) => {
  if (e.target.classList.contains('clickButton')) {
   const price = e.target.closest('.card').querySelector('.price')
    // const number = parseInt(price.innerText.replace(/[^\d]/g, ""))
    // console.log(number)
    const number = parseInt(price.innerText)
   
    console.log(number)
   const nam= e.target.closest('.card').querySelector('.num').innerHTML
    console.log(nam)
   
  }
});




  
  
  

























