//HASH LOOP

let final=0;
    let max=0;
    let hashtable=[]
    for (let i=0; i<arr.length; i++) {
        if ( isNaN(hashtable[arr[i]]) ) { hashtable[arr[i]]=0;} 
        hashtable[arr[i]]++;
        if (hashtable[arr[i]]>=max) { max=hashtable[arr[i]]; console.log(arr[i]); }
    }
    final = arr.length-max;
    return final;