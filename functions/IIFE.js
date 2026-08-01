(function chai() {
  //named IIFE
  console.log('Chai');
})();// important ;

(()=>{
  console.log(`db connencted`)  
})();
((name)=>{
  //Simple IIFE
  console.log(`hey ${name} bhai`)  
})("aritra")