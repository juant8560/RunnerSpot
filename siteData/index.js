import indexData from './pages/home';
import aboutData from "./pages/about.js";
import faqData from "./pages/faq.js";
import testimonialsData from "./pages/testimonials.js";
import galeriatestimonioData from './pages/galeriatestimonio.js';
import formtestimoniosData from './pages/formtestimonios.js';
import consumiblesData from "./pages/consumibles.js";   
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
        case "/preguntas_frecuentes.html":
            context = { ...context, ...faqData };
        case "/consumibles.html":
            context = { ...context, ...consumiblesData };
            break;
        case "/testimonios.html":
            context = { ...context, ...testimonialsData };
            context = { ...context, ...galeriatestimonioData };
            context = { ...context, ...formtestimoniosData };
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}
export default context;