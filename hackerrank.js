//HASH LOOP

let final=0;
    let max=[0,0];
    let hashtable=[]
    for (let i=0; i<arr.length; i++) {
        if ( isNaN(hashtable[i]) ) { hashtable[i]=0;} 
        hashtable[i]++;
        if (hashtable[i]>max[1]) { max[0]=i; max[1]=hashtable[i]; }
    }
    final = max[1];
    return final;