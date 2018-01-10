export class TreeChild {
    constructor(children, conceptId, id, label, type) {
        this.visible = false;
        this.expanded = false;
        this.children = children;
        this.conceptId = conceptId;
        this.id = id;
        this.label = label;
        this.type = type;
        this.visible = true;
        if (this.hasChildren()) {
            this.icon = 'fa fa-chevron-down';
            this.expanded = true;
        }
    }
    hasChildren() {
        return this.children.length > 0;
    }
    toggleNode() {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].visible = !this.children[i].visible;
        }
        this.expanded = !this.expanded;
        if (this.expanded === true) {
            this.icon = 'fa fa-chevron-down';
        }
        else {
            this.icon = 'fa fa-chevron-right';
        }
    }
}
export class Tree extends Array {
}
