let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world';


while(0){
    alert('可爱~') /*弹窗显示*/
}


document.querySelector('html').onclick = function(){
    alert('嘿嘿嘿~痒');//点击后，出现弹窗
}


let myImage = document.querySelector('img');/*图片转换器*/
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/小凯琪.jpg')
    {
        myImage.setAttribute('src','');
    }else{
        myImage.setAttribute('src','');
    }
}

















