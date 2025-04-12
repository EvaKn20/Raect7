import Delivery from "./Delivery";
import Info from "./Info";

export default function getContentModal(id, props) {
    switch(id) {
        case "delivery":
            return <Delivery {...props} />;
        case "info":
            return <Info {...props} />;
        default:
            return <div>404</div>;
    }
}