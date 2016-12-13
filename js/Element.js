class Element{
    constructor() {
      this.name =  '';
      this.airremID = null;
    	this.background;
    	this.height = elementOptionsInstance.options.basics.height;
    	this.classArray = [];
    	this.dataAttrArray = [];
    	this.childs = [];
    	this.mother;
    }

    getName(){
    	return this.name;
    }

    getAireemID(){
      return this.aireemID;
    }
    getBackground(){
    	return this.background;
    }

    getHeight(){
    	return this.height;
    }

    getClass(index){
    	return this.classArray[index];
    }

    getDataAttr(index){
    	return this.dataAttrArray[index];
    }

    getChild(index){
    	return this.childs[index];
    }

    setName(name)
    {
      this.name = name;
    }

    setAireemID(aireemID)
    {
      this.aireemID = aireemID;
    }


    setBackground(background)
    {
    	this.background = background;
    }

    setHeight(height)
    {
    	this.height = height;
    }

    setClass(className)
    {
    	this.classArray.push(className);
    }

    setDataAttr(dataAttr)
    {
    	this.dataAttrArray.push(dataAttr);
    }

    setChild(child)
    {
    	this.childs.push(child);
    }

     getMother(){
    	return this.mother;
    }

    setMother(mother)
    {
    	this.mother = mother;
    }



}
