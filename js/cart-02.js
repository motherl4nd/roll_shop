const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', function (event) {

    // Проверяем был ли клик совершен по Добавить в корзину
    if (event.target.hasAttribute('data-cart')) {



        const card = event.target.closest('.card');
        // информация о товаре
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };


        // Проверяем есть ли товар в корзине
        const itemInCart = cartWrapper.querySelector(`[data-id = "${productInfo.id}"]`);

        // Если товар в корзине
        if (itemInCart) {

            const counterEL = itemInCart.querySelector('[data-counter]');
            counterEL.innerText = parseInt(counterEL.innerText) + parseInt(productInfo.counter);

        } else {
            // если товара нет в корзине
            // Собираем данные и подставим их в шаблон
            const cardItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
            <button type="button"class="burger">
                                <div class="burger__line" data-burger="remove"></div>
                                <div class="burger__line" data-burger="remove"></div>
                </button>
            <div class="cart-item__top">
           <div class="cart-item__img">
               <img src="${productInfo.imgSrc}" alt="${productInfo.title}">
           </div>
           <div class="cart-item__desc">
               <div class="cart-item__title">${productInfo.title}</div>
               <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

               <!-- cart-item__details -->
               <div class="cart-item__details">

                   <div class="items items--small counter-wrapper">
                       <div class="items__control" data-action="minus">-</div>
                       <div class="items__current" data-counter="">${productInfo.counter}</div>
                       <div class="items__control" data-action="plus">+</div>
                   </div>

                   <div class="price">
                       <div class="price__currency">${productInfo.price}</div>
                   </div>

               </div>
               <!-- // cart-item__details -->

           </div>
            </div>
            </div>`;
            // Отобразим товар в корзине
            cartWrapper.insertAdjacentHTML('beforeend', cardItemHTML);
        }

        // Сбрасываем счетик добавленного товара на 1
        card.querySelector('[data-counter]').innerText = '1';


        // Отображение статуса корзины Пустая / Полная
        toggleCartStatus();

        // Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery();

    }
});