/*
 *   Copyright (c) 2020 
 *   All rights reserved.
 */

function calcul(){
    console.log('hi')
    const main = document.querySelector('main');
    let totalArticles = main.querySelector('#articles');
    totalArticles.textContent = main.querySelectorAll('article').length;
}

calcul();
const lessBtns = document.querySelectorAll('.less');
const moreBtns = document.querySelectorAll('.more');
const deleteBtns = document.querySelectorAll('.delete');
const hearts = document.querySelectorAll('.heart');
const main = document.querySelector('main');


function updateTotal(){
    const total = main.querySelector('.total');
    const articlePrices = main.querySelectorAll('.subtotal');
    let sum = 0;
    for (const item of articlePrices) {
        sum += parseInt(item.textContent);
    }
    total.textContent = sum + ' DT';
}

function updateSubTotal(btn) {
    const p = btn.parentNode.parentNode.parentNode;
    const quantity = parseInt(p.querySelector('.quantity').textContent);
    const unitPrice = parseInt(p.querySelector('.unit').textContent);
    const nTotal = unitPrice * quantity;
    p.querySelector('.subtotal').textContent = nTotal +' DT';
    updateTotal();
}

for (const btn of lessBtns) { 
    btn.addEventListener('click', function(e){
        if (parseInt(this.nextElementSibling.textContent) < 2){
            e.preventDefault();
        } else {
            this.nextElementSibling.textContent = parseInt(this.nextElementSibling.textContent)-1;
            updateSubTotal(this);
        }    
    })
}

for(const btn of moreBtns){
    btn.addEventListener('click', function(){
        this.previousElementSibling.textContent = parseInt(this.previousElementSibling.textContent) + 1;
        updateSubTotal(this);
    })
}


for (const btn of deleteBtns) {
    btn.addEventListener('click', function(){
        main.removeChild(this.parentNode.parentNode.parentNode);
        updateTotal();
        calcul();
    })
}


for (const heart of hearts) {
    heart.addEventListener('click', function(){
        this.classList.toggle('blue');
    })
}