import indexData from './pages/home';
import aboutData from "./pages/about.js";

function context(page) {
    console.log("Getting context for: " + page);
    let context = {
        title: "Mi Sitio ABC",
    }
    switch (page) {
        case "/index.html":
            context = { ...context, ...indexData };
            break;
        case "/nosotros.html":
            context = { ...context, ...aboutData };
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}
export default context;