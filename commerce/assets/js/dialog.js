/*  on veut sélectionner tous les boutons qui ont un attribut data dialog.
    On déclare une variable qui permet de sélectionner tous les boutons (balise 'button') qui ont l'attribut data-dialog.*/ 

    const btnDialogTrigger = document.querySelectorAll('button[data-dialog]'); 
    
/*Permet de sélectionner tous les éléments qui possèdent la classe dialog, dans ce cas ci dialog c'est notre overlay*/ 
    const dialogs = document.querySelectorAll('.dialog'); 

/*console.log(btnDialogTrigger); /*Afin de vérifier si une node list nous est bien retournée.*/
/* Lorsqu'on utilise le queryselectorall, nous obtenons un tableau, il faudra donc boucler dans le tableau avant d'utiliser l'écouteur d'événements.*/ 

/*Le premier paramètre de la méthode forEach est une fonction qui sera exécutée pour chacun des éléments du tableau, soit un callback*/ 
/*la méthode checkVisibility retourne un bouléen, si visible true.*/ 
/* la méthode setAttribute permet de modifier la valeur d'un attribut*/


btnDialogTrigger.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        const dialogSelector = btn.getAttribute('data-dialog');
        const dialog = document.querySelector(dialogSelector);
        console.log(dialog);

        if(dialog){
            if(dialog.checkVisibility()){
                dialog.removeAttribute('open', ''); 
            }
            else{
                dialog.setAttribute('open', ''); 
            }    
        }
    });
});
/*  On veut que lorsqu'on clique sur le dialog, il se ferme
    Pour fermer le dialog, on utilise removeAttribute, cependant l'événement qui se produit est communiqué au parent et peut importe ou on clique, cela fermera l'overlay.
    Nous devons donc utiliser stopImmediatePropagation.
    */

dialogs.forEach(dialog=>{
    dialog.addEventListener('click', ()=>{
        dialog.removeAttribute('open','');
    })

    const childrens = dialog.querySelectorAll('& > *');

    childrens.forEach(children => {
        childrens.addEventListener('click',e => {
            e.stopImmediatePropagation();
        })
    }) 
});