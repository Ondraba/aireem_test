class UserInterface {
    constructor() {
      this.guiInit();
      this.getElement();
      this.summonStructureVendor();
      this.newElementNamesArray= [];
      this.newElementClassArray = [];
    }


     guiInit(){
       var defaultMother =  elementOptionsInstance.options.elementInheritence.defaultStructureRoot;
       $('.js_input-mother-select-list').append(("<option value='" + defaultMother + "'>" + defaultMother + "</option>"));
     }


     getElement(){
       var t = this;
       $('.js_class-button').on('click', function()
       {
         if ($('.js_class-input').val() != '') {


          var elementClass= $('.js_class-input').val();

          t.createElementMask(elementClass);
          $('.js_class-input').val('');
            }
         });
       }




     createElementMask(elementClass){
       var t = this;


       t.pushToArray(elementClass, t.newElementClassArray)
       t.pustItemToSelectList(elementClass, $('.js_input-class-select-list'));

       var newReviewBox = $(document.createElement('div'));

       newReviewBox.addClass('reviewBox');
       newReviewBox.css('background-color', helpersInstnace.getRandomColor());
       newReviewBox.css('height', elementOptionsInstance.options.structureMapOptions.height);

       var newReviewBoxText = $(document.createElement('span'));
       newReviewBoxText.text('.'+ elementClass);
       newReviewBox.append(newReviewBoxText);

       elementOptionsInstance.options.elementInheritence.defaultMaskRoot.append(newReviewBox);
     }

     pushToArray(value, array){
       var t = this;
       array.push(value);
     }

     pustItemToSelectList(value, selectList){
          selectList.append("<option value='" + value+ "'>" + value + "</option>")
     }

     emptyMask(){
          var t = this;
          t.newElementNamesArray.slice(0);
          t.newElementClassArray.slice(0);
          $('.element-review').empty();
     }


     summonStructureVendor(){
       var t = this;
       $('.js_sumbit_new_element').on('click', function()
       {

         var elementName = $('.js_name-input').val();
         t.pustItemToSelectList(elementName, $('.js_input-mother-select-list'));
         var elementClassArray= t.newElementClassArray;
         var elementMother=$('.js_input-mother-select-list').val();
         structureVendorInstance.createElement(
              elementName,
              elementClassArray,
              elementMother
            );
            t.emptyMask();
        });

     }


     rerenderByExists(){

     }



   }
