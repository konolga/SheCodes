export default class EventEmitter {
    constructor() {
        // this.events = new Map(); // will fail when emit 'toString' due to prototype
        this.events = Object.create(null); // map object without a prototype
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
        return this;
    }

    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
        if (!this.events[eventName]) {
            return this;
        }
        const index = this.events[eventName].findIndex((item) => item === listener);
        if (index >= 0 && this.events[eventName].length === 1) {
            delete this.events[eventName];
        }
        else if (index >= 0 && this.events[eventName].length > 1) {
            this.events[eventName].splice(index, 1);
        }
        return this;
    }

    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
        if (!this.events[eventName]) {
            return false;
        }
        this.events[eventName].forEach(e => e.apply(null, args))
        return true;
    }
}