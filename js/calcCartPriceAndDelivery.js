function calcCartPriceAndDelivery(){

    const cartItems = document.querySelectorAll('.cart-item');

    const totalPriceEl= document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');

    const cartDelivery = document.querySelector('[data-cart-delivery]');



    let totalPrice = 0;
    cartItems.forEach(function(item){

        // Находим кол-во товаров
        const amountEl = item.querySelector('[data-counter]').innerText;
        const priceEl = item.querySelector('.price__currency').innerText;

        // Получаем стоимость товаров
        const currentPrice = parseInt(amountEl) * parseInt(priceEl);

        totalPrice += currentPrice;
    })


    // Отображаем цену на стр
    totalPriceEl.innerText = totalPrice;

    // Скрываем или показываем блок с стоимость доставки
    if(totalPrice > 0){
        cartDelivery.classList.remove('none');
    }else{
        cartDelivery.classList.add('none');
    }

    // Указываем стоимость доставки
    if(totalPrice >= 600){

        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно'

    }else{

        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }

}