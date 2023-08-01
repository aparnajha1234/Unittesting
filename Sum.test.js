
const sum= require('./Sum');

/*describe ('Update Home Page',()=>{

        it('object check',()=>{
            let data = sum(1,2);
            expect(data).toEqual({name:'code'})
        })

    });*/

describe ('Update Home Page',()=>{

    it('my second test',()=>{
       expect(sum(1,2)).toBe(3);
   })

     describe ('Update Home Page',()=>{
        it('my 2 second test',()=>{
           
           expect(sum(1,2)).toBe(3);
     })

         it('my 3 second test',()=>{
            
           expect(sum(1,2)).toBe(3);
       })

      it('my 4 second test',()=>{
           
            expect(sum(1,2)).not.toBe(4);
        })

   })

        
 })



/*test('my first test case',()=>{
    let data = 10;
    expect(data).toBe(10);
})

test('my second test case',()=>{
    let data= 13;
    expect(data).toBe(13);
})*/