let box = document.getElementById('box');

let api = async()=>{
    let re = await fetch("https://reqres.in/api/users?page=1");
    let file = await re.json();
    let info = file.data.map((element)=>{
        return `<li>
                    <div class="img"><img src="${element.avatar}" alt=""></div>  
                    <h2>${element.first_name} ${element.last_name}</h2>
                    <h3>${element.email}</h3>
                    <i class="fas fa-info-circle"></i>
                </li>`
    }).join('');
    box.innerHTML = info;
}

let navBtn = document.getElementById('nav-btn');
navBtn.addEventListener('click',()=>{
    box.innerHTML = `<h4 class='load'>Loading......</h4>`;
    setTimeout(() => {
        api()
    }, 5000);
})

let barVal = document.getElementById('sr-bar');

barVal.addEventListener('keyup',()=>{
    console.log(barVal.value);
})