function countTact(e) {
    var res = [];
    res[0] = e;
    if(e%13 == 0)
    {
        res[1] = e/13;
    } else {
        res[1] = 3*e+1;
    }
    if(e%2 == 0)
    {
        res[2] = e/2;
    } else {
        res[2] = 3*e+1;
    }
    return res;
}