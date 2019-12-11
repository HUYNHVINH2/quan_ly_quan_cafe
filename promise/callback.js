function ThucGiac(){
    // Simulate a code delay
    let doSomeThing = '....';
    setTimeout( function(){
      doSomeThing = 'danh rang rua mat';
      console.log(doSomeThing)
    }, 500 );
    console.log(doSomeThing);
  }



/** promise **/

const resultePromise = (a, b) =>{
    return new Promise((resolve, reject)=>{
        setTimeout( function(){
            doSomeThing = 'danh rang rua mat';
            return resolve('second')
          }, 1000 );
        })
}


resultePromise(1,2).then(result =>{ 
    console.log(result);
    console.log('object');
});
