//index.js
function init(){
    // fetch('data.json')
    // .then(function(res){return res.json();})
    // .then(function(data){console.log(data)});
    
    const elUl = document.querySelector('.ring');
    const Category = document.querySelector('.category');
    console.log(Category)
    let data,tagList='';

    fetch('./js/data.json')
    .then( res => res.json()) 
    .then( (data) => {
        callback(data)
        setEventListeners(data.list)
    });  

    function callback(data){
        // console.log(data.list[0].name)
        // 한 줄 코드일 시 {} 없어도무방 => / function을 대체

        data.list.forEach(function(data){
            tagList += `<li>
            <a href="sub.html">
            <img src="${data.img}">
            ${data.name}<br>${data.price}
            </a>
            </li>`;
        });
        elUl.innerHTML = tagList;

        // const elLi = document.querySelectorAll('li');
        // }
    }

    function UpdateItem(data,Key,Value){
        const List = document.querySelectorAll('.ring li')
        data.forEach( (item, index) => {
            console.log(item)
            if(item[Key] === Value){
            List[index].classList.remove('invisible')
            }else{
            List[index].classList.add('invisible')
            }
        });
    }

    function onBtnClick(e,data){
        // console.log(e)
        const dataset = e.target.dataset;
        const Key = dataset.key;
        const Value = dataset.value;
        if( Key == null || Value == null){
            return
        }
        UpdateItem(data,Key,Value)
    }

    function setEventListeners(data){
        Category.addEventListener('click', (e) => onBtnClick(e, data));
    }


}

window.onload = init;

