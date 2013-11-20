(function($window) {

    /**
     * @module Tabby
     * @author Adam Timberlake
     * @constructor
     */
    var Tabby = function Tabby() {

        var $scope      = this,
            elements    = $window.document.querySelectorAll('*[tabindex]');

        // Iterate over each element that has the `tabindex` property so that we can attach
        // custom events to them.
        for (var index = 0, maxNodes = elements.length; index < maxNodes; index++) {

            var element = elements[index];

            element.onfocus     = this._attachFocusEvent.bind($scope, element);
            element.onblur      = this._attachBlurEvent.bind($scope, element);

        }

    };

    /**
     * @property prototype
     * @type {Object}
     */
    Tabby.prototype = {

        /**
         * @method _fireEvent
         * @param element {Object}
         * @param eventName {String}
         * @return {void}
         * @private
         */
        _fireEvent: function _fireEvent(element, eventName) {

            element.dispatchEvent(new CustomEvent(eventName, {
                bubbles:    false,
                cancelable: true
            }));

        },

        /**
         * @method _attachFocusEvent
         * @param element {Object}
         * @return {void}
         * @private
         */
        _attachFocusEvent: function _attachFocusEvent(element) {

            /**
             * @method onkeyup
             * @param event {Object}
             * @return {Boolean}
             */
            $window.onkeyup = function onKeyUp(event) {

                var keyCode = (event.keyCode ? event.keyCode : event.which);

                if (keyCode !== 9 ) {

                    // Well it wasn't the tab key that gave the element focus.
                    return false;

                }

                this._fireEvent(element, 'tabEnter');
                return true;

            }.bind(this);

        },

        /**
         * @method _attachBlurEvent
         * @param element {Object}
         * @return {void}
         * @private
         */
        _attachBlurEvent: function _attachBlurEvent(element) {
            this._fireEvent(element, 'tabLeave');
        }

    };

    $window.document.addEventListener('DOMContentLoaded', function() {
        new Tabby();
    });

})(window);