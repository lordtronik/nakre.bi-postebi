 
const objects = [
    { id: '1', firstName: 'გიორგი', lastName: 'მამარდაშვილი', age: 24,    },
    { id: '2', firstName: 'გიორგი', lastName: 'ლორია', age: 38,   }, 
    { id: '3', firstName: 'ლუკა', lastName: ' გუგეშაშვილი', age: 25,  },
    { id: '4', firstName: 'სოლომონ ', lastName: ' კვერკველია', age:  32,   },
    { id: '5', firstName: ' საბა', lastName: ' საზანოვი', age:  22,   },
    { id: '5', firstName: 'გურამ  ', lastName: '  კაშია', age:   37,   },
    { id: '5', firstName: 'გირეგი  ', lastName: ' გველესიანი', age:   33,   },
    { id: '5', firstName: '  ლაშა', lastName: '  დვალი', age:   29,   },
    { id: '5', firstName: '  ლუკა', lastName: '  ლოჩოშვილი', age:   26,   },
    { id: '5', firstName: '  ოთარ', lastName: '  კაკაბაძე', age:   29,   },
    { id: '5', firstName: ' ვლადიმერ', lastName: '  მამუჩაშვილი', age:    29,   },
    { id: '5', firstName: ' ლევან', lastName: '  შენგელია', age:   28,   },
    { id: '5', firstName: '  გიორგი', lastName: '  წიტაიშვილი', age:   24,   },
    { id: '5', firstName: ' გიორგი', lastName: '  გოჩოლეიშვილი', age:   23,   },
    { id: '5', firstName: ' ოთარ', lastName: ' კიტეიშვილი', age:    28,   },
    { id: '5', firstName: ' ნიკა ', lastName: 'კვეკვესკირი   ', age:    32,   },
    { id: '5', firstName: 'გიორგი  ', lastName: 'ლოჩოშვილი   ', age:   25,   },
    { id: '5', firstName: 'სანდრო ', lastName: 'ალთუნაშვილი ', age:   27,   },
    { id: '5', firstName: '  გიორგი ', lastName: 'ქოჩორაშვილი  ', age:   25,   },
    { id: '5', firstName: ' ჯაბა  ', lastName: 'კანკავა  ', age:   38,   },
    { id: '5', firstName: ' ანზორ ', lastName: ' მექვაბიშვილი   ', age:   23,   },
    { id: '5', firstName: ' გიორგი  ', lastName: 'მიქაუტაძე  ', age:   24,   },
    { id: '5', firstName: ' ბუდუ ', lastName: ' ზივზივაძე  ', age:   30,   },
    { id: '5', firstName: 'გიორგი ', lastName: '  ქვილითაია  ', age:   31,   },
    { id: '5', firstName: ' ზურიკო ', lastName: ' დავითაშვილი  ', age:   23,   },
    { id: '5', firstName: ' ხვიჩა  ', lastName: 'კვარაცხელია  ', age:   23,   },
     
];

const cardsContainer = document.getElementById('cardsContainer');
const addObjectForm = document.getElementById('addObjectForm');
const formInputs = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    age: document.getElementById('age'),
    eyeColor: document.getElementById('eyeColor'),
    id: document.getElementById('id'),
    imageUrl: document.getElementById('imageUrl'),
};

// ფუნქცია ქარდების გამოსაჩენად
function renderCards() {
    cardsContainer.innerHTML = '';
    objects.forEach(obj => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        // სურათის დამატება (თუ აქვს URL)
        const imageHtml = obj.imageUrl ? `<img src="${obj.imageUrl}" alt="Image" class="profile-image">` : '';

        card.innerHTML = `
            ${imageHtml}
            <h3>${obj.firstName} ${obj.lastName}</h3>
            <p>ასაკი: ${obj.age}</p>
            <p>აიდი: ${obj.id}</p>
            <button onclick="deleteCard('${obj.id}')">წაშლა</button>
            
        `;
        cardsContainer.appendChild(card);
    });
}

 
function deleteCard(id) {
    const index = objects.findIndex(obj => obj.id === id);
    if (index !== -1) {
        objects.splice(index, 1);
        renderCards();
    }
}

// ფორმის წარდგენა ახალი ობიექტის შესაქმნელად
addObjectForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const newObject = {
        id: formInputs.id.value,
        firstName: formInputs.firstName.value,
        lastName: formInputs.lastName.value,
        age: formInputs.age.value,
        eyeColor: formInputs.eyeColor.value,
        imageUrl: formInputs.imageUrl.value, // სურათის URL
    };

    objects.push(newObject);
    renderCards();

    // ფორმის გასუფთავება
    formInputs.firstName.value = 'სსსსსსსს';
    formInputs.lastName.value = '';
    formInputs.age.value = '';
    formInputs.eyeColor.value = '';
    formInputs.id.value = '';
    formInputs.imageUrl.value = ''; // სურათის URL-საც ვამოწმებთ
});

// დასაწყისი
renderCards();
objects[0].imageUrl = 'saqartvelosnakrebi1.jpg'; // ჩასვით თქვენი სურათის URL
renderCards(); // განაახლეთ ქარდები
objects[1].imageUrl = 'saqartvelosnakrebi111.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[2].imageUrl = 'saqartvelosnakrebi2.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[3].imageUrl = 'saqartvelosnakrebi3.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[4].imageUrl = 'saqartvelosnakrebi4.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[5].imageUrl = 'saqartvelosnakrebi5.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[6].imageUrl = 'saqartvelosnakrebi6.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[7].imageUrl = 'saqartvelosnakrebi7.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[8].imageUrl = 'saqartvelosnakrebi8.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[9].imageUrl = 'saqartvelosnakrebi9.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[10].imageUrl = 'saqartvelosnakrebi10.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[11].imageUrl = 'saqartvelosnakrebi11.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[12].imageUrl = 'saqartvelosnakrebi12.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[13].imageUrl = 'saqartvelosnakrebi13.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[14].imageUrl = 'saqartvelosnakrebi14.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[15].imageUrl = 'saqartvelosnakrebi15.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[16].imageUrl = 'saqartvelosnakrebi16.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[17].imageUrl = 'saqartvelosnakrebi17.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[18].imageUrl = 'saqartvelosnakrebi18.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[19].imageUrl = 'saqartvelosnakrebi19.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[20].imageUrl = 'saqartvelosnakrebi20.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[21].imageUrl = 'saqartvelosnakrebi21.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[22].imageUrl = 'saqartvelosnakrebi22.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[23].imageUrl = 'saqartvelosnakrebi23.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[25].imageUrl = 'saqartvelosnakrebi24.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[23].imageUrl = 'saqartvelosnakrebi25.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
objects[24].imageUrl = 'saqartvelosnakrebi26.jpg'; // მეორე აიდისთვის ფოტოს URL-ის დამატება
renderCards(); // განაახლეთ ქარდები
 

 
