function hang(secs){
    const doneAt = Date.now() + (secs * 1000);
    while(Date.now() < doneAt)  {}
}

hang(10); // this code will locj the browser page  for next ten seconds