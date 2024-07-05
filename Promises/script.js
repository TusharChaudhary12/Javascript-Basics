 const cart=["Jeans","Shirts","Pants","Shoes"];

 const user=createOrder(cart);

 user.then(function(orderid){
  console.log(orderid);
 })

//  console.log(user);

 function createOrder(cart){
  const pr=new Promise(function(resolve,reject){
    if(!validatecart(cart)){
    // const err=new Error("Invalid Input!!!!!");
    // const err="Invalid Input";
    reject("error");
    }
    const orderid="12345";
    if(orderid){
      setTimeout(function(){
        resolve(orderid)
      },4000)
    }
  })
  return pr;
 }
 function validatecart(cart){
  return cart.length>0;
 }