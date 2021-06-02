//Создаю запрос
let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function (){
   if(xhr.readyState === 4){
      let infoAboutPerson = JSON.parse(xhr.responseText);
      for(let i = 0; infoAboutPerson.length; i++){
         // if(infoAboutPerson[i].id != undefined){
            partnersContent(infoAboutPerson[i].name, infoAboutPerson[i].company.name, infoAboutPerson[i].address.city, infoAboutPerson[i].phone);
         // }
      }
   }
};

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.send();




let partners = document.getElementById('partners');

function partnersContent(name, company, city, phone){
   let partnersItem = document.createElement('div');
   partnersItem.classList.add('partners__item');
   
   //Добавление имени
   let partnersName = document.createElement('h3');
   partnersName.classList.add('partners__name');
   partnersName.textContent = `${name}`;
   partnersItem.appendChild(partnersName);

   //Добавление компании
   let partnersCompany = document.createElement('p');
   partnersCompany.classList.add('partners__company');
   partnersCompany.innerHTML = `<span class="partners__text-bold">company:</span> ${company}`;
   partnersItem.appendChild(partnersCompany);

   //Добавление города
   let partnersCity = document.createElement('p');
   partnersCity.classList.add('partners__city');
   partnersCity.innerHTML = `<span class="partners__text-bold">city:</span> ${city}`;
   partnersItem.appendChild(partnersCity);

   //Добавление телефона
   let partnersPhone = document.createElement('p');
   partnersPhone.classList.add('partners__phone');
   partnersPhone.innerHTML = `<span class="partners__text-bold">phone:</span> ${phone}`;
   partnersItem.appendChild(partnersPhone);

   //Добавление partnersItem в блок partners
   partners.appendChild(partnersItem);
}