window.addEventListener('click', function (event) {

    let counter;

    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus") {

        // Находим обертку счетчик
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с счетчик
        counter = counterWrapper.querySelector('[data-counter]');
    }

    if (event.target.dataset.burger === "remove") {

        // Удаляем товар из корзины
        event.target.closest('.cart-item').remove();

        toggleCartStatus();

        // Пересчет общей стоимости в корзине
        calcCartPriceAndDelivery();
    }

    // Проверяем по тому ли элементу сделали клик
    if (event.target.dataset.action === "plus") {

        counter.innerText = ++counter.innerText;
    }

    // Проверяем по тому ли элементу сделали клик
    if (event.target.dataset.action === "minus") {

        if (parseInt(counter.innerText) > 1) {

            counter.innerText = --counter.innerText;

            // Проверка на товар который находится в корзине
        } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            toggleCartStatus();

            // Пересчет общей стоимости в корзине
            calcCartPriceAndDelivery();

        }

    }

    // Проверяем клик на + или - в корзине

    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {

        // Пересчет общей стоимости в корзине
        calcCartPriceAndDelivery();
    }

});