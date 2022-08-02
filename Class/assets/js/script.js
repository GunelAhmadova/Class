class CustomMatch{
    constructor(numb){ 
        this.Numb=numb;
     } 
        plus(value){ 
            return new CustomMatch(this.Numb+=value)
            } 
        minus(value) {
            return new CustomMatch(this.Numb-=value)
        } 
        multiply(value) {
        return new CustomMatch(this.Numb*=value)}
        divide (value) {
            return new CustomMatch(this.Numb/=value)}
         

}
console.log(new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2)); 
