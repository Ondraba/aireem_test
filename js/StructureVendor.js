 class StructureVendor {
    constructor() {
      this.elementsArray = [];
      this.counter = 0;
    }


    createElement(elementName, classArray, elementMother) {
        var t = this;
        t.counterInc();

        var newElementInstance = new Element();
        newElementInstance.setName(elementName);
        newElementInstance.setAireemID(t.counter);
        newElementInstance.setAireemDA('aireemDA');
        for (var i = 0; i < classArray.length; i++) {
            newElementInstance.setClass(classArray[i]);
        }
        newElementInstance.setMother(elementMother);
        t.elementsArray.push(newElementInstance);

        t.generatePreview(newElementInstance);
        console.log('created')
    }

    generatePreview(newElementInstance){
      var newElement = $(document.createElement('div'));
      var elementMotherVar = $('#' + newElementInstance.getMother());
      newElement.attr('id',newElementInstance.getName());
      newElement.attr('aireemId', newElementInstance.getAireemID());
      newElement.attr('data-aireemDA', newElementInstance.getAireemDA());
      if (newElementInstance.getMother() != elementOptionsInstance.options.elementInheritence.defaultStructureRoot){
         newElement.addClass('innerDiv');}
      else {
          newElement.addClass('standardDiv');}

        for (var i = 0; i < newElementInstance.getClassArray().length; i++){
            newElement.addClass(newElementInstance.getClassArray()[i]);
        }

    	this.appendElement(newElement, elementMotherVar);
    }


    appendElement(element, elementMother){
    	elementMother.append(element);
    }

    counterInc(){
      var t = this;
      t.counter++;
    }
}
