let features = [
   {
      title: "Suspendisse",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
      link: 'https://test.com',
      iconSrc: "https://pngimg.com/uploads/like/like_PNG71.png"
   },
   {
      title: "Maecenas",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
      link: 'https://test.com',
      iconSrc: "https://www.freepnglogos.com/uploads/key-png/key-icon-housing-and-residential-life-28.png"
   },
   {
      title: "Aliquam",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
      link: 'https://test.com',
      iconSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7wTEBP8hB6_9ADMMPEhcO_timBkTSvPcpcb7mSaBhpNfYThj-"
   },
   {
      title: "Habitasse",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptate, repellat quisquam aspernatur possimus voluptates, fugiat omnis deleniti velit sit eaque animi veniam voluptatem voluptatum, cum ipsam asperiores perferendis. Atque!",
      link: 'https://test.com',
      iconSrc: "https://s1.iconbird.com/ico/2013/3/635/w240h264139388538316.png"
   }
]

let featuresContainer = document.getElementById('features');


// Добавление элементов на сайт

for(let i = 0; i < features.length; i ++){
   let newFeatures = document.createElement('div');
   newFeatures.classList.add('features__item');

   //Cоздаем картинку
   let featuresImg = document.createElement('img');
   featuresImg.classList.add('features__img');
   featuresImg.setAttribute('src', features[i].iconSrc);
   newFeatures.appendChild(featuresImg);

   //Создаем титулку
   let featuresTitle = document.createElement('h2');
   featuresTitle.classList.add('features__title');
   featuresTitle.setAttribute('id', 'featuresTitle')
   featuresTitle.innerText = features[i].title;
   newFeatures.appendChild(featuresTitle);

   //Создаем текст
   let featuresText = document.createElement('p');
   featuresText.classList.add('features__text');
   featuresText.innerText = features[i].text;
   newFeatures.appendChild(featuresText);

   //Создаем ссылку
   let featuresLink = document.createElement('a');
   featuresLink.classList.add('features__link');
   featuresLink.setAttribute('href', features[i].link)
   featuresLink.setAttribute('target', '_blank')
   featuresLink.innerText = 'read more';
   newFeatures.appendChild(featuresLink);



   featuresContainer.appendChild(newFeatures);
}

// Добавление события при наведение нa ссылку
let title = document.getElementsByClassName('features__title');
let link = document.getElementsByClassName('features__link');

for(let i = 0; i < link.length; i++){
   link[i].addEventListener('mouseover', function(){
      link[i].style.backgroundColor = "red";
      title[i].style.backgroundColor = "red";
   });
   link[i].addEventListener('mouseout', function(){
      link[i].style.backgroundColor = "yellowgreen";
      title[i].style.backgroundColor = "yellowgreen";
   });
}