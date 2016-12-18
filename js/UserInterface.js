class UserInterface {
    constructor() {
      this.guiInit();
      this.getElement();
      this.summonStructureVendor();
      this.newElementNamesArray= [];
      this.newElementClassArray = [];
      this.localAppOptionsInstance = appOptionsInstance;
      this.fillCreativeArea();
      this.getFavourites();
      this.removeFromElementMask();
      this.returnProps();
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
       newFavouriteBox.addClass('sm');
       newFavouriteBox.addClass('sm');
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

       getFavourites(){
           var t = this;
           $(document).on("click",".standard-favourite-box", function ()
           {
           t.createElementMask($(this).children('span').text());
           });
       }

       elementEfects(){
           $('#structure-content').each(function () {
              $(this).children('div').css('border','1px solid black');
           });
       }




     createElementMask(elementClass){
       var t = this;
       t.pushToArray(elementClass, t.newElementClassArray)
       t.pushItemToSelectList(elementClass, $('.js_input-class-select-list'));
       var newReviewBox = $(document.createElement('div'));
       newReviewBox.addClass('reviewBox');
       newReviewBox.css('background-color', helpersInstnace.getRandomColor());
       newReviewBox.css('height', elementOptionsInstance.options.structureMapOptions.height);
       var newReviewBoxText = $(document.createElement('span'));
       newReviewBoxText.text('.'+ elementClass);
       newReviewBox.append(newReviewBoxText);
       elementOptionsInstance.options.elementInheritence.defaultMaskRoot.append(newReviewBox);
     }

     removeFromElementMask(){
       var t = this;
       $(document).on('click','.reviewBox',function () {
         for(var i = 0; i < t.newElementClassArray.length; i++){
        if($(this).children('span').text() == '.' + t.newElementClassArray[i]){
          $(this).remove();
          delete t.newElementClassArray[i];
        }
       }
     });
   }


   returnProps(){
     var t = this;
     $(document).on('click','.aireemContainer',function () {
       $('.element-review').html('');
       for(var i = 0; i < structureVendorInstance.elementsArray.length; i++){
       var classItem =  structureVendorInstance.elementsArray[i];
       if($(this).attr('aireemid') == classItem.getAireemID()){
          $('.js_name-input').val(classItem.getName());
         console.log(classItem.getAireemID());
         for(var x = 0; x < classItem.getClassArray().length; x++){
          t.createElementMask(classItem.getClassArray()[x]);
         }
        }
       }
     });
   }

     pushToArray(value, array){
       var t = this;
       array.push(value);
     }

     pushItemToSelectList(value, selectList){
          selectList.append("<option value='" + value+ "'>" + value + "</option>")
     }

     emptyMask(){
          var t = this;
          t.newElementNamesArray.splice(0);
          t.newElementClassArray.splice(0);
          $('.element-review').empty();
          $('.js_name-input').val('');
     }


     summonStructureVendor(){
       var t = this;
       $('.js_sumbit_new_element').on('click', function()
       {
         var elementName = $('.js_name-input').val();
         if(elementName != '') {
         if (structureVendorInstance.elementsArray.length > 0){
            t.newVerifiedStructure(elementName);
          }
          else {
            t.newStructure(elementName);
            console.log('nula');
          }
          t.elementEfects();
          t.emptyMask();
          }
        });
      }

      newStructure(elementName){
            var t = this;
              t.pushItemToSelectList(elementName, $('.js_input-mother-select-list'));
              var elementClassArray= t.newElementClassArray;
              var elementMother=$('.js_input-mother-select-list').val();
              structureVendorInstance.createElement(
                   elementName,
                   elementClassArray,
                   elementMother
                 );
            }

      newVerifiedStructure(elementName){
        var t = this;
        var alreadyCreated = false;
        for(var i = 0; i < structureVendorInstance.elementsArray.length; i++){
            console.log('news');
             var elementItem = structureVendorInstance.elementsArray[i];
              if (elementName == elementItem.getName()){
                alreadyCreated = true;
                t.editExistingStructure(elementItem);
              }
              else {
                console.log('alreadyCreated');
              }
            }
            if (!alreadyCreated){
              t.newStructure(elementName);
            }
          }

        editExistingStructure(elementItem){
          var t = this;
           $('#structure-content').each(function () {
          if (elementItem.getAireemID() == $(this).children('div').attr('aireemid')){
          console.log(elementItem.getAireemID());
          console.log($(this).children('div').attr('aireemid'));
          let difference = t.newElementClassArray.filter(x => elementItem.getClassArray().indexOf(x) == -1);
          console.log(difference);
        }
        });
        }


     editCreatedByVendor(){
     }


     rerenderByExists(){
     }



   }
