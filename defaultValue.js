//Example # 1
// function welcomeMsg(name = 'EveryOne'){  
//     let msg = `Welcome ${name}`;
//     console.log(msg);
// } 
// welcomeMsg('Hassan');
// welcomeMsg(); 
//Agr bagair argument ka function ko call or invoke karenga tou print (Everyone) hoga kyuka upr parameter mai  Bydefalult equals to krka (Everyone) ko set krdia.


// Example # 2 (Destructuring and Bydefault both in this example)
//Ye pura aik parameter hai.
function createIcecream({ scoop = 1, topping = ['Dark Chocolate'] }) //In parameter ==> Destructuring and ByDefault Value Both in this parameter.
{
    const scoopText = scoop === 1 ? 'scoop' : 'scoops'; //Ternary Operator
    console.log(`Your sundae has ${scoop} ${scoopText} with ${topping.join(' and ')} topping`); //(.join) ==> do array ka elements ko sath copy krega (and) ka sth.
    //(.join) ==> return krta hai array (Yani srf array ka elements pr chla ga)
}
createIcecream({}) //idhr aap ne srf destructure ka bracket bnadya bhala se value nhi de isna default value consider krli or chl gaya.
createIcecream({ scoop: 2, topping: ['Sprinkles'] })
createIcecream({ scoop: 2, topping: ['Sprinkles', 'Smarties'] }) //Is call or invoke pr join ka function work krega because elements ko join krta hai or srf isi bar array mai do element hain.

// createIcecream(); //Ye crash or error dega because idhr aap ny arguments nhi diya.