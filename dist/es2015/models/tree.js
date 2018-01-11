export class TreeChild {
    constructor(children, conceptId, id, label, type) {
        this.visible = true;
        this.expanded = true;
        this.children = children;
        this.conceptId = conceptId;
        this.id = id;
        this.label = label;
        this.type = type;
        if (this.hasChildren()) {
            this.toggleNode();
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
            this.icon = 'fa fa-minus-square';
        }
        else {
            this.icon = 'fa fa-plus-square';
        }
    }
}
export class Tree extends Array {
}
