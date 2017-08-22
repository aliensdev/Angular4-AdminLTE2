export class MenuItem {
    name: string = '';
    icon: string = '';
    route: string = '';
    items: MenuItem[];
    type: string = '';

    constructor(name: string, icon: string, route: string, childItems: MenuItem[] = null, type: string = 'static') {
        this.name = name;
        this.icon = icon;
        this.route = route;
        this.items = childItems;
        this.type = type;
    }
}