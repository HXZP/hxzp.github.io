function createParagraph() {
    let para = document.createElement('p');
    para.textContent = '你点击了这个按钮！';
    document.body.appendChild(para);
  }

  const buttons = document.querySelectorAll('button');

  for(let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', createParagraph);
  }

 /*  <script>
      document.addEventListener("DOMContentLoaded", function() { //此为定义一个函数
         function createParagraph() {
           let para = document.createElement('p');
           para.textContent = '你点击了这个按钮！';
           document.body.appendChild(para);
         }
 
         const buttons = document.querySelectorAll('button');
 
         for(let i = 0; i < buttons.length ; i++) {
           buttons[i].addEventListener('click', createParagraph);
         }
       });
     </script>
*/