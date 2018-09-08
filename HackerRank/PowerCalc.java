class PowerCalc{
    int power(int n, int p) throws Exception{
        if(n < 0 || p < 0){
            throw new Exception("n and p should be non-negative");
        }
        else{
            return (int)Math.pow(n, p);
        }
    }

    public static void main (String[] args){
        PowerCalc calc = new PowerCalc();
        try{
            calc.power(5, 8);
        }
        catch(Exception e){
            System.err.println(e.getClass().getSimpleName() + ": " + e.getMessage());
        }
    }
}
