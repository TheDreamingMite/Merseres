const btn = document.querySelector('.feature__link')
const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')

btns.forEach((btnItem, index) => {
    btnItem.addEventListener('click', () => {

        if(btnItem.classList.contains('feature__link_active')){
            btns.forEach((btnItem) => {
                btnItem.classList.remove('feature__link_active') 
            })
            // для всех удаляем класс для активной стрелочки

            lists.forEach((listsItem) => {
                listsItem.classList.add('hidden')
            })
            // для всех добавляем класс для скрытия доп информации
        }else{
            btns.forEach((btnItem) => {
                btnItem.classList.remove('feature__link_active') 
            })
            // для всех удаляем класс для активной стрелочки
            
            btnItem.classList.add('feature__link_active');
            //добавляем класс только на наш пункт

            lists.forEach((listsItem) => {
                listsItem.classList.add('hidden')
            })
            // для всех добавляем класс для скрытия доп информации

            lists[index].classList.remove('hidden')
            // для нажатого пункта удаляем класс для скрытия доп информации
        }
    })
})