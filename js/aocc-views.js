/* :::::::::::::::::::::::::::::::::::::::::::::::::: */
/* V I E W S */
/* :::::::::::::::::::::::::::::::::::::::::::::::::: */

/* AOCC */

class AOCC_View {
    constructor(component) {
        this.component = component;
    }
};

class AOCC_JQueryView extends AOCC_View {
    constructor(component, element) {
        super(component);
        this.element = element;
    }
};
