const tabsHeandlerElems = document.querySelectorAll('[data-tabs-handler]')
const tabsContentElems = document.querySelectorAll('[data-tabs-field]')
const tabsHeadElems = document.querySelectorAll('[design-list__item]')
const titleDesign = document.querySelectorAll('.design__title')

for(let btn of tabsHeandlerElems){
     btn.addEventListener('click',() => {
        tabsHeandlerElems.forEach((item)=>{
            item.classList.remove('design-list__item_active')
        })
        btn.classList.add('design-list__item_active') 

        //console.dir(btn.dataset.tabsHandler);
        tabsContentElems.forEach(content =>{
            if(content.dataset.tabsField === btn.dataset.tabsHandler){
               content.classList.remove('hidden')
            }else{
               content.classList.add('hidden')
            }
        })
        titleDesign.forEach(title =>{
            if(title.dataset.tabsHandler===btn.dataset.tabsHandler){
               title.classList.remove('hidden')
            }else{
               title.classList.add('hidden')
            }
        })
     })
}