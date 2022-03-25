
const mergeTag = {
    // @Required
    // plugin name
    name: 'merge_tag',
  
    // @Required
    // data display
    display: 'submenu',
  
    // @Required
    // add function - It is called only once when the plugin is first run.
    // This function generates HTML to append and register the event.
    // arguments - (core : core object, targetElement : clicked button element)
    add: function (core, targetElement) {
  
      // Generate submenu HTML
      // Always bind "core" when calling a plugin function
      let listDiv = this.setSubmenu.call(core);
  
      // You must bind "core" object when registering an event.
      /** add event listeners */
      var self = this;
      listDiv.querySelectorAll('ul').forEach(function (btn) {
        btn.addEventListener('click', self.onClick.bind(core));
      });
  
      // @Required
      // You must add the "submenu" element using the "core.initMenuTarget" method.
      /** append target button menu */
      core.initMenuTarget(this.name, targetElement, listDiv);
    },
  
    setSubmenu: function () {
   /*   const listDiv = this.util.createElement('DIV');
      // @Required
      // A "se-submenu" class is required for the top level element.
      listDiv.className = 'se-submenu se-list-layer';
      listDiv.innerHTML = '<div class="se-list-inner se-list-font-size"><ul class="se-list-basic">'+
      */
    /*  
      '<li><button type="button" class="se-btn-list" value=">">></button></li>'+
  '<li><button type="button" class="se-btn-list" value="≤">≤</button></li> <li><button type="button" class="se-btn-list" value="≥">≥</button></li>   <li><button type="button" class="se-btn-list" value="≻">≻</button></li>'+
   '<li><button type="button" class="se-btn-list" value="≺">≺</button></li> <li><button type="button" class="se-btn-list" value="⋀">⋀</button></li>'+
   '<li><button type="button" class="se-btn-list" value="⋁">⋁</button></li><li><button type="button" class="se-btn-list" value="∀">∀</button></li>'+
   '<li><button type="button" class="se-btn-list" value="∃">∃</button></li><li><button type="button" class="se-btn-list" value="∑">∑</button></li>'+
   '<li><button type="button" class="se-btn-list" value="∏">∏</button></li><li><button type="button" class="se-btn-list" value="∐">∐</button></li>'+
   '<li><button type="button" class="se-btn-list" value="⇒">⇒</button></li><li><button type="button" class="se-btn-list" value="⇐">⇐</button></li>'+
    '<li><button type="button" class="se-btn-list" value="⟺">⟺</button></li> </ul></div>'
   */

    const listDiv = this.util.createElement('SELECT');

    // @Required
    // A "se-submenu" class is required for the top level element.
    listDiv.className = 'se-submenu se-list-layer se-list-font-size';
    const targetList = [
      { target: '_blank', name: 'New window'},
      { target: '_parent', name: 'Parent frame'},
      { target: '_top', name: 'First frame', selected: true},
      { target: 'AnyFrame', name: 'Frame name'},
      { target: '_dialog', name: 'Self defined dialog'}
    ];
    /*
    listDiv.innerHTML = '<div class="se-list-inner se-list-font-size"><ul class="se-list-basic">'+
   
    
    '<li><button type="button" class="se-btn-list" value=">">></button></li>'+
'<li><button type="button" class="se-btn-list" value="≤">≤</button></li> <li><button type="button" class="se-btn-list" value="≥">≥</button></li>   <li><button type="button" class="se-btn-list" value="≻">≻</button></li>'+
 '<li><button type="button" class="se-btn-list" value="≺">≺</button></li> <li><button type="button" class="se-btn-list" value="⋀">⋀</button></li>'+
 '<li><button type="button" class="se-btn-list" value="⋁">⋁</button></li><li><button type="button" class="se-btn-list" value="∀">∀</button></li>'+
 '<li><button type="button" class="se-btn-list" value="∃">∃</button></li><li><button type="button" class="se-btn-list" value="∑">∑</button></li>'+
 '<li><button type="button" class="se-btn-list" value="∏">∏</button></li><li><button type="button" class="se-btn-list" value="∐">∐</button></li>'+
 '<li><button type="button" class="se-btn-list" value="⇒">⇒</button></li><li><button type="button" class="se-btn-list" value="⇐">⇐</button></li>'+
  '<li><button type="button" class="se-btn-list" value="⟺">⟺</button></li> </ul></div>'
   */




  
  let html =      
  '<select  title="links">';
      for (let i = 0, len = targetList.length, t, selected; i < len; i++) {
          t = targetList[i];
          selected = t.selected ? ' selected' : '';
          html += '<option value="' + t.target + '"' + selected + '>' + t.name + '</option>';
      }
  html += '</select>' +

'</div>' 

listDiv.innerHTML = html



/*
  
  '<div class="se-list-inner se-list-font-size"><div class="listbox-area"><div class="left-area"> <span id="exp_elem">Choose an element:</span>'+
    '<div id="exp_wrapper"><button aria-haspopup="listbox" aria-labelledby="exp_elem exp_button"  id="exp_button"> > </button>'+
    
    '<ul id="exp_elem_list" tabindex="-1" role="listbox" aria-labelledby="exp_elem" class="hidden">'+
   
    '<li><button type="button" id="exp_elem_Np" role="option" value="≤" class="se-btn-list">≤</button></li>'+
    '<li><button type="button"  id="exp_elem_Pu" role="option" value="≥" class="se-btn-list">≥</button></li>'+   
    '<li><button type="button" id="exp_elem_Am" role="option" value="≻" class="se-btn-list">≻</button></li>'+
     '<li><button type="button" id="exp_elem_Cm" role="option" value="≺" class="se-btn-list">≺</button></li>'+
    '<li><button type="button" id="exp_elem_Bk" role="option" value="⋀" class="se-btn-list">⋀</button></li>'+
     '<li><button type="button" id="exp_elem_Cf" role="option" value="⋁" class="se-btn-list">⋁</button></li>'+
     '<li><button type="button" id="exp_elem_Es" role="option" value="∀" class="se-btn-list">∀</button></li>'+
     '<li><button type="button" id="exp_elem_Fm" role="option" value="∃" class="se-btn-list">∃</button></li>'+
     '<li><button type="button" id="exp_elem_Md" role="option" value="∑" class="se-btn-list">∑</button></li>'+
     '<li><button type="button" id="exp_elem_No" role="option" value="∏" class="se-btn-list">∏</button></li>'+
     '<li><button type="button" id="exp_elem_Lr" role="option" value="∐" class="se-btn-list">∐</button></li>'+
     '<li><button type="button" id="exp_elem_Rf" role="option" value="⇒" class="se-btn-list">⇒</button></li>'+
     '<li><button type="button" id="exp_elem_Db" role="option" value="⇐" class="se-btn-list">⇐</button></li>'+
      '<li><button type="button" id="exp_elem_Sg" role="option" value="⟺" class="se-btn-list"   >⟺</button></li>'+
      '</ul></div> </div> </div>'
*/
      
      return listDiv
    },

    
    onClick: function (e) {
      const value = e.target.value;
      const node = this.util.createElement('span');
      this.util.addClass(node, 'se-custom-tag');
      node.textContent = value;
  
      this.insertNode(node);
      const zeroWidthSpace = this.util.createTextNode(this.util.zeroWidthSpace);
      node.parentNode.insertBefore(zeroWidthSpace, node.nextSibling);
  
      this.submenuOff();
    }
   
  
    
  };
  
  export default mergeTag