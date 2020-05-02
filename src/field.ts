 export interface Field {
    name: string;
    label: string;
    labelHTML: HTMLLabelElement;
    render(): HTMLElement;
    getValue(): any;
}
