/* :::::::::::::::::::::::::::::::::::::::::::::::::: */
/* E R R O R S */
/* :::::::::::::::::::::::::::::::::::::::::::::::::: */

/* AOCC */

class AOCC_InternalError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
};

class AOCC_ComponentFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
};

class AOCC_ComponentNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
};

class AOCC_UnsupportedOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
};
