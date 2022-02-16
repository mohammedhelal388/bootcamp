class car{

    constructor( year , make, model)
    {
        this._year=year;
        this._make=make;
        this._model=model;
    }

    get year()
    {
        return this._year
    }
    set year(value)
    {
        const yeararray=[2000,2001,2002]
      if(yeararray.includes(value))
      {
        this._year=value
      }
      else
      {
          throw Error(value+ "this model is not avaliable")
      }
     
    }


    get description()
    {
        return this._year + " " + this._make + " " + this._model; 
    }
}

var instance = new car(2005,"tyota","berious");
console.log(instance.description);

instance.year=2001;
//instance.year=2008;
console.log(instance._year)