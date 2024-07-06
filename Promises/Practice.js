const cart = [
  {
    itemname: "Jeans",
    itemPrice: 2000,
  },
  {
    itemname: "Shirt",
    itemPrice: 1000,
  },
  {
    itemname: "Shoes",
    itemPrice: 3000,
  },
  {
    itemname: "Belt",
    itemPrice: 500,
  },
];

let walletBalance = 10000;

createOrder(cart)
.then(function(orderId){
  return orderId;
})
.then(function(orderId){
  return updatePayment(orderId);
})
.then(function(paymentInfo){
console.log(paymentInfo);
return paymentInfo;
})
.then(function (paymentInfo){
  return ShowOrderSummary(paymentInfo);
})
.then(function(summary){
  console.log(summary);
  return summary;
})
.then(function(summary){
return updateWallet(summary);
})
.then(function(wallet){
  console.log(wallet);
})
.catch(function(err){
  console.log(err.message);
})
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateOrder(cart)) {
      reject(new Error("Cart is not valid"));
    }
    const orderId = 54678;
    if (orderId) {
      resolve(orderId);
    }
  });
}
function validateOrder(cart) {
  return cart.length > 0;
}

function updatePayment(orderId){
  return new Promise((resolve,reject)=>{
    if(orderId){
      resolve({paymentStatus:1,message:'Payment is successful'});
    }
    else
    reject(new Error("Payment Failed!!!"));
  })
}

function ShowOrderSummary(paymentInfo){
  return new Promise((resolve,reject)=>{
    if(paymentInfo.paymentStatus===1){
      resolve({status:'success',Summaryofcard:cart});
    }
    reject(new Error("Something went wrong!!!"))
  })
}

function updateWallet(summary){
  return new Promise((resolve,reject)=>{
    if(summary.status==='success'){
      let OrderAmount=6500;
      walletBalance=walletBalance-OrderAmount;
      resolve({Balance:walletBalance,message:'Wallet is updated'})
    }
    else
    reject(new Error("Wallet not updated!!!"));
  })
}