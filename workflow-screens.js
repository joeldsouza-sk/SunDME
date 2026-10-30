(() => {
 const tabs=[...document.querySelectorAll('.tabs [role="tab"]')];
 const panels=[...document.querySelectorAll('.workflow-module')];
 // Static markup remains readable without JavaScript; JS adds the tab behavior.
 function select(index,focus=false){tabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1});panels.forEach((panel,i)=>{panel.hidden=i!==index;if(i===index){panel.classList.remove('screen-enter');void panel.offsetWidth;panel.classList.add('screen-enter')}});if(focus)tabs[index].focus()}
 tabs.forEach((tab,index)=>{tab.addEventListener('click',()=>select(index));tab.addEventListener('keydown',event=>{let next;if(['ArrowRight','ArrowDown'].includes(event.key))next=(index+1)%tabs.length;if(['ArrowLeft','ArrowUp'].includes(event.key))next=(index-1+tabs.length)%tabs.length;if(event.key==='Home')next=0;if(event.key==='End')next=tabs.length-1;if(next!==undefined){event.preventDefault();select(next,true)}})});
 if(tabs.length){document.querySelector('.explorer').classList.add('tabs-enhanced');select(0)}
 const dialog=document.querySelector('#screen-dialog');if(!dialog)return;
 document.querySelectorAll('.screenshot-trigger').forEach(button=>button.addEventListener('click',()=>{const image=dialog.querySelector('img');image.src=button.dataset.screen;image.alt=button.querySelector('img').alt;dialog.querySelector('h2').textContent=button.dataset.screenTitle+' — Sample interface';dialog.showModal();document.body.classList.add('modal-open')}));
 dialog.querySelector('.screen-dialog-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close()}});
 document.querySelector('.optional-disclosure')?.addEventListener('toggle',event=>{if(event.target.open)event.target.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))});
})();