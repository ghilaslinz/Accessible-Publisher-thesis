const TableCaption = {
    name: 'tableCaption',
    display: 'submenu',
    // @Options
    title: 'Add a caption table',
    buttonClass: '',
    innerHTML: '<svg tabindex="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M15 21H9V10h6v11zm2 0V10h5v10a1 1 0 0 1-1 1h-4zM7 21H3a1 1 0 0 1-1-1V10h5v11zM22 8H2V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v4z" fill="#000"/></svg>',

    // @Required
    // add function - It is called only once when the plugin is first run.
    // This function generates HTML to append and register the event.
    // arguments - (core : core object, targetElement : clicked button element)
    add: function (core, targetElement) {

        // @Required
        // Registering a namespace for caching as a plugin name in the context object
        const context = core.context;
        context.customSubmen = {
            targetButton: targetElement,
            textElement: null,
            currentSpan: null
        };

        // Generate submenu HTML
        // Always bind "core" when calling a plugin function
        let listDiv = this.setSubmenu(core);

        // Input tag caching
        context.customSubmen.textElement = listDiv.querySelector('input');

        // You must bind "core" object when registering an event.
        /** add event listeners */
        listDiv.querySelector('.se-btn-primaryy').addEventListener('click', this.onClick.bind(core));
        //          listDiv.querySelector('.se-btn').addEventListener('click', this.onClickRemove.bind(core));

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
            '<input class="se-input-form" type="text" placeholder="insert text" style="border: 1px solid #CCC;" />' +
            '<button type="button" class="se-btn-primaryy se-tooltip">' +
            '<strong>OK</strong>' +
            '<span class="se-tooltip-inner">' +
            '<span class="se-tooltip-text">Append span</span>' +
            '</span>' +
            '</button>' +

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
            this.util.removeClass(this.context.customSubmen.targetButton, 'active');
            this.context.customSubmen.textElement.value = '';
            this.context.customSubmen.currentSpan = null;
        } else if (this.util.hasClass(element, 'se-custom')) {
            this.util.addClass(this.context.customSubmen.targetButton, 'active');
            this.context.customSubmen.textElement.value = element.textContent;
            this.context.customSubmen.currentSpan = element;
            return true;
        }

        return false;
    },

    // @Override submenu
    // Called after the submenu has been rendered
    on: function () {
        this.context.customSubmen.textElement.focus();
    },

    onClickRemove: function () {
        const span = this.context.customSubmen.currentSpan;
        if (span) {
            this.util.removeItem(span);
            this.context.customSubmen.currentSpan = null;

            this.submenuOff();
            this.focus();
        }
    },

    onClick: function () {
        const value = this.context.customSubmen.textElement.value.trim();
        if (!value) return;

        const span = this.context.customSubmen.currentSpan;
        if (span) {
            span.textContent = value;
            this.setRange(span, 1, span, 1);
        } else {
            this.functions.insertHTML('<span class="tablecaption">' + value + '</span>', true);
            this.context.customSubmen.textElement.value = '';
        }

        this.submenuOff();
    }
};

export default TableCaption;