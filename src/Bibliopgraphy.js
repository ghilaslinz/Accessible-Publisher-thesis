// ex) A command plugin to add "Range format element(util.isRangeFormatElement)" to selection
const bibliographyPlugin = {
    // @Required @Unique
    // plugin name
    name: 'bibliographyPlugin',
    display: 'submenu',
    title: 'Add a Reference',
    innerHTML: '<svg tabindex="0" id="Layer_1_1_" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m62 20c0-9.925-8.075-18-18-18s-18 8.075-18 18c0 1.527.212 3.001.571 4.418l-1.781 1.189c-.501-.376-1.117-.607-1.79-.607s-1.289.231-1.79.607l-4.31-2.878c.059-.235.1-.476.1-.729 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .253.041.494.1.729l-4.31 2.878c-.501-.376-1.117-.607-1.79-.607-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3c0-.253-.041-.494-.1-.729l4.31-2.878c.501.376 1.117.607 1.79.607s1.289-.231 1.79-.607l4.31 2.878c-.059.235-.1.476-.1.729 0 1.654 1.346 3 3 3s3-1.346 3-3c0-.253-.041-.494-.1-.729l1.298-.867c2.244 5.864 7.459 10.254 13.802 11.325v4.271h-1c-.553 0-1 .448-1 1v14c0 2.757 2.243 5 5 5s5-2.243 5-5v-14c0-.552-.447-1-1-1h-1v-4.271c8.499-1.435 15-8.828 15-17.729zm-57 9c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm9-6c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm9 6c-.552 0-1-.449-1-1s.448-1 1-1 1 .449 1 1-.448 1-1 1zm5.908-3.737 1.302-.87c.501.376 1.117.607 1.79.607s1.289-.231 1.79-.607l4.31 2.878c-.059.235-.1.476-.1.729 0 1.654 1.346 3 3 3s3-1.346 3-3c0-.462-.113-.894-.301-1.285l8.301-8.301v4.586h2v-7c0-.552-.447-1-1-1h-7v2h4.586l-8.301 8.301c-.391-.188-.823-.301-1.285-.301-.673 0-1.289.231-1.79.607l-4.31-2.878c.059-.235.1-.476.1-.729 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .253.041.494.1.729l-.769.513c-.216-1.047-.331-2.131-.331-3.242 0-8.822 7.178-16 16-16s16 7.178 16 16-7.178 16-16 16c-6.977 0-12.909-4.496-15.092-10.737zm2.092-3.263c0-.551.448-1 1-1s1 .449 1 1-.448 1-1 1-1-.449-1-1zm11 6c0 .551-.448 1-1 1s-1-.449-1-1 .448-1 1-1 1 .449 1 1zm5 29c0 1.654-1.346 3-3 3s-3-1.346-3-3v-13h6zm-2-15h-2v-4.051c.333.019.662.051 1 .051s.667-.032 1-.051z"/><path d="m33.352 25.538-1.773.924c1.146 2.198 2.859 4.06 4.957 5.384l1.068-1.691c-1.8-1.136-3.27-2.733-4.252-4.617z"/><path d="m58 20c0-7.72-6.28-14-14-14-6.524 0-12.128 4.429-13.626 10.77l1.947.46c1.283-5.435 6.086-9.23 11.679-9.23 6.617 0 12 5.383 12 12s-5.383 12-12 12c-.618 0-1.24-.047-1.848-.141l-.305 1.977c.709.109 1.432.164 2.153.164 7.72 0 14-6.28 14-14z"/><path d="m2 2h6v2h-6z"/><path d="m10 2h14v2h-14z"/><path d="m2 6h13v2h-13z"/><path d="m17 6h7v2h-7z"/><path d="m2 10h2v2h-2z"/><path d="m6 10h6v2h-6z"/><path d="m14 10h10v2h-10z"/><path d="m2 14h7v2h-7z"/><path d="m11 14h13v2h-13z"/><path d="m36 50c0-.552-.447-1-1-1h-5v-4c0-.552-.447-1-1-1h-5v-4c0-.552-.447-1-1-1h-5v-4c0-.552-.447-1-1-1h-6c-.553 0-1 .448-1 1v9h-5c-.553 0-1 .448-1 1v15h-2v2h36v-2h-2zm-30-4h4v14h-4zm6-1v-9h4v4 20h-4zm6-4h4v4 15h-4zm6 5h4v4 10h-4zm6 14v-9h4v9z"/></svg>',

    // @Required
    // add function - It is called only once when the plugin is first run.
    // This function generates HTML to append and register the event.
    // arguments - (core : core object, targetElement : clicked button element)
    add: function (core, targetElement) {

        // @Required
        // Registering a namespace for caching as a plugin name in the context object
        const context = core.context;
        /*
                //link number
                const rangeTag = core.util.createElement('a');
                core.util.addClass(rangeTag, '__link_number');
        
        */
        context.customSubmenu = {
            targetButton: targetElement,
            textElement: null,
            currentSpan: null,

            //link number
            //  tag: rangeTag
        };

        // Generate submenu HTML
        // Always bind "core" when calling a plugin function
        let listDiv = this.setSubmenu(core);

        // Input tag caching
        context.customSubmenu.textElement = listDiv.querySelector('input');

        // You must bind "core" object when registering an event.
        /** add event listeners */
        listDiv.querySelector('.se-btn-primary').addEventListener('click', this.onClick.bind(core));
        //        listDiv.querySelector('.se-btn').addEventListener('click', this.onClickRemove.bind(core));

        // @Required
        // You must add the "submenu" element using the "core.initMenuTarget" method.
        /** append target button menu */
        core.initMenuTarget(this.name, targetElement, listDiv);
    },

    setSubmenu: function (core) {
        const listDiv = core.util.createElement('DIV');
        // @Required
        // A "se-submenu" class is required for the top level element.
        listDiv.className = 'se-menu-container se-submenu se-list-layer';
        listDiv.innerHTML = '' +
            '<div class="se-list-inner">' +
            '<ul class="se-list-basic" style="width: 230px;">' +
            '<li>' +
            '<div class="se-form-group">' +
            '<input class="se-input-form" type="text" placeholder="write your reference" style="border: 1px solid #CCC;" />' +
            '<button type="button" class="se-btn-primary se-tooltip">' +
            '<strong>OK</strong>' +
            '<span class="se-tooltip-inner">' +
            '<span class="se-tooltip-text">Append span</span>' +
            '</span>' +
            '</button>' +
            /*
            '<button type="button" class="se-btn se-tooltip">' +
                '<strong>X</strong>' +
                '<span class="se-tooltip-inner">' +
                    '<span class="se-tooltip-text">Remove</span>' +
                '</span>' +
            '</button>' +
            */
            '</div>' +
            '</li>' +
            '</ul>' +
            '</div>';

        return listDiv;
    },

    // @Override core
    // Plugins with active methods load immediately when the editor loads.
    // Called each time the selection is moved.

    active: function (element) {
        // If no tag matches, the "element" argument is called with a null value.
        if (!element) {
            this.util.removeClass(this.context.customSubmenu.targetButton, 'active');
            this.context.customSubmenu.textElement.value = '';
            this.context.customSubmenu.currentSpan = null;
        } else if (this.util.hasClass(element, 'se-custom-tag')) {
            this.util.addClass(this.context.customSubmenu.targetButton, 'active');
            this.context.customSubmenu.textElement.value = element.textContent;
            this.context.customSubmenu.currentSpan = element;
            return true;
        } // link number
        /*
         if (this.util.hasClass(element, '__link_number')) {
            this.util.addClass(this.context.customCommand.targetButton, 'active');
            return true;
            
        }
        */

        return false;
    },

    // @Override submenu
    // Called after the submenu has been rendered
    /* on: function () {
         this.context.Submenu.textElement.focus();
     },
 */
    /*
        onClickRemove: function () {
            const span = this.context.customSubmenu.currentSpan;
            if (span) {
                this.util.removeItem(span);
                this.context.customSubmenu.currentSpan = null;
    
                this.submenuOff();
                this.focus();
            }
        },
    */
    onClick: function () {
        const value = this.context.customSubmenu.textElement.value.trim();
        var content = true;

        if (!value) return;

        const span = this.context.customSubmenu.currentSpan;

        if (span) {
            span.textContent = value;
            this.setRange(span, 1, span, 1);
        } else {
            this.functions.insertHTML('<span class="se-custom-tag"></span>', true);

            if (this.context.element.wysiwyg.querySelector(".espace")) {
                return this.functions.appendContents('<span class="liste">' + value + '</span>');

            } else {
                return this.functions.appendContents('<div class="espace">' + 'References' + '</div>') + this.functions.appendContents('<span class="liste">' + value + '</span>');
            }




            // this.context.customSubmenu.textElement.value = '';





        }

        this.submenuOff();

    },

    //link number
    /*
    // @Required, @Override core
    // The behavior of the "command plugin" must be defined in the "action" method.
    action: function () {
        const rangeTag = this.util.getRangeFormatElement(this.getSelectionNode());

        if (this.util.hasClass(rangeTag, '__link_number')) {
            this.detachRangeFormatElement(rangeTag, null, null, false, false);
        } else {
            this.applyRangeFormatElement(this.context.customCommand.tag.cloneNode(false));
        }
    }
*/

};
export default bibliographyPlugin;