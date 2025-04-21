class Set {
    constructor(arr) {
        this.arr = arr
    }

    add(val){
        if(!this.has(val)) this.arr.push(val);
    }
    delete(val) {
        this.arr = this.arr.filter(x => x !== val)
    }
    has(val){
        return this.arr.includes(val)
    }
    get size(){
        return this.arr.length;
    }
}

const s = new Set([1,2,3,4,5]);

//trying to add the new value in set s
s.add(2);
s.add(3);
s.add(4);

console.log('s should have 5 members and actiually has : ', s.size);

console.log('s should constain 5:', s.has(5));

s.add(6); 
console.log('s should contain 7:', s.has(6));
console.log('s should have 6 members and actually has:', s.size);


//trying to delete the value from the set s

s.delete(2);

console.log('s should no longer contain 2', !s.has(2));
s.delete(5);