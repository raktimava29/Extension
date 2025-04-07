let store = []
let backup = []
let store1;
let store2 = []
let inp = document.getElementById('inp')
let butt = document.getElementById('butt')
let uull = document.getElementById('ul')
let del = document.getElementById('boo')
let tab = document.getElementById('tab')
let save = JSON.parse(localStorage.getItem('store'))
let save1 = JSON.parse(localStorage.getItem('store2'))

show = () => {
    let items = "";
    for(let i=0 ; i<store2.length ; i++){
        items += `
        <li>
            <a target='_blank' href='${store[i]}'>
                ${store2[i]}
            </a>
        </li>`
    }   
    uull.innerHTML = items
    
}

if(save){
    store = save
    store2 = save1
    show()
}

butt.addEventListener('click',add = () => {
    store.push(inp.value)
    store2.push(inp.value)
    show()
    inp.value = ""
    localStorage.setItem('store', JSON.stringify(store))
    localStorage.setItem('store2', JSON.stringify(store2))
})


tab.addEventListener('click',clicked = () =>{
    chrome.tabs.query({active:true, currentWindow: true},function(tabs){
        store.push(tabs[0].url)
        store2.push(tabs[0].title)
        localStorage.setItem('store',JSON.stringify(store))
        localStorage.setItem('store2',JSON.stringify(store2))
        show()
    })
})


del.addEventListener('click',deleted = () =>{
    store1 = JSON.stringify(store)
    backup = store1
    backup = JSON.parse(backup)
    store1 = JSON.stringify(store2)
    backup = store1
    backup = JSON.parse(backup)
    store.pop()
    store2.pop()
    localStorage.setItem('store', JSON.stringify(store))
    localStorage.setItem('store2', JSON.stringify(store2))
    show()
})

clear.addEventListener('click',cleared = () =>{
    store1 = JSON.stringify(store)
    backup = store1
    backup = JSON.parse(backup)
    store1 = JSON.stringify(store2)
    backup = store1
    backup = JSON.parse(backup)
    store = []
    store2 = []
    localStorage.clear()
    show()
})
