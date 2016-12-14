class UserInterface {
    constructor() {
      this.guiInit();
      this.getElement();
      this.summonStructureVendor();
      this.newElementNamesArray= [];
      this.newElementClassArray = [];
      this.localAppOptionsInstance = appOptionsInstance;
      this.fillCreativeArea();
    }


     guiInit(){
       var defaultMother =  elementOptionsInstance.options.elementInheritence.defaultStructureRoot;
       $('.js_input-mother-select-list').append(("<option value='" + defaultMother + "'>" + defaultMother + "</option>"));
     }

     fillCreativeArea(){
       var t = this;
       var favouritesArea = $('.favourites-area');
       var favourites = t.localAppOptionsInstance.options.creativeArea.favourites;
       t.fillXs(favouritesArea, favourites);
       t.fillSm(favouritesArea, favourites);


     }

     fillXs(favouritesArea, favourites){
       for(var i = 0; i < favourites.xsGrid.length; i++){
       var newFavouriteBox = $(document.createElement('div'));
       newFavouriteBox.addClass('standard-favourite-box');
       newFavouriteBox.addClass('xs');
       var newFavouriteBoxText = $(document.createElement('span'));
       newFavouriteBoxText.text(favourites.xsGrid[i]);
       newFavouriteBox.append(newFavouriteBoxText);
       favouritesArea.append(newFavouriteBox);}
     }

     fillSm(favouritesArea, favourites){
       for(var i = 0; i < favourites.smGrid.length; i++){
       var newFavouriteBox = $(document.createElement('div'));
       newFavouriteBox.addClass('standard-favourite-box');
       var newFavouriteBoxText = $(document.createElement('span'));
       newFavouriteBoxText.text(favourites.smGrid[i]);
       newFavouriteBox.append(newFavouriteBoxText);
       favouritesArea.append(newFavouriteBox);}
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
          t.newElementNamesArray.splice(0);
          t.newElementClassArray.splice(0);
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
