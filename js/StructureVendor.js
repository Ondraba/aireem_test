 class StructureVendor {
    constructor() {
      this.elementsArray = [];
      this.counter = 0;
    }


    createElement(elementName, classArray, elementMother){
      var t = this;
      t.counterInc();

      var newElementInstance = new Element();
      newElementInstance.setName(elementName);
      newElementInstance.setAireemID(t.counter);
      for(var i = 0; i < classArray.length; i++){
        newElementInstance.setClass(classArray[i]);
      }
      newElementInstance.setMother(elementMother);


    	var newElement = $(document.createElement('div'));
      var elementMotherVar = $('#' + elementMother);
      newElement.attr('id',elementName);
      newElement.attr('aireemId', t.counter);
      newElement.data('aireemDA', t.counter);
      console.log(newElement.data('aireemDA'));
      for(var i = 0; i < classArray.length; i++){
        newElement.addClass(classArray[i]);
      }
      if (elementMother != elementOptionsInstance.options.elementInheritence.defaultStructureRoot){
          newElement.height(30);
          newElement.css("background-color","orange");
          newElement.css("margin-bottom","5px");
          console.log('mama elementu' + elementMother);
      }
      else {
          newElement.addClass('standardDiv');
          newElement.css("background-color","white");
          newElement.css("margin-bottom","10px");
      }
    	this.appendElement(newElement, elementMotherVar);
    }

    appendElement(element, elementMother){
      console.log(element);
    	elementMother.append(element);
    }

    counterInc(){
      var t = this;
      t.counter++;
    }
}
