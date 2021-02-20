import { Widget } from "./libs";
import { v4 as uuidv4 } from "uuid";

export class HomeComponent {
  price;
  mode;
  widgets: Widget[];

  reCalculateTotal(mode: string, widgets: Widget[], widget: Widget) {
    this.widgets = this.updateWidgets(mode, widgets, widget);
    this.price = this.getTotalPrice(widgets);
  }

  updateWidgets(mode: string, widgets: Widget[], widget: Widget) {
    switch (mode) {
      case "create":
        return this.addWidget(widgets, widget);
      case "update":
        return this.updateWidget(widgets, widget);
      case "delete":
        return this.deleteWidget(widgets, widget);
      default:
        break;
    }
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

  addWidget(widgets, widget) {
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return [...widgets, newWidget];
  }

  updateWidget(widgets, widget) {
    return widgets.map(wdgt =>
      widget.id === wdgt.id ? Object.assign({}, widget) : wdgt
    );
  }

  deleteWidget(widgets, widget) {
    return widgets.filter(wdgt => wdgt.id !== widget.id);
  }
}

/*

getUsers(): Promise<Payload | DataError | ServerError > { //if ok return payload, // if data error return {type: 'DataError' } // if server error return {type: 'ServerError'}

I generally model generic errors like { type: 'Error', message: string }

getUsers.then( if res.type === 'Payload' return <Table/> if res.type === 'DataError' return <CorruptedData/> if res.type === 'ServerError' return <ServerError />

but you only need to check for that .type thing because you have a cardinality of 3 you handle 3 cases
instead of checking all of the possible issues by nesting them, which is what happens if you had a product instead of a sum (union)

*/
