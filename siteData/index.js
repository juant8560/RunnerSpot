import indexData from './pages/home';
import aboutData from "./pages/about.js";
import faqData from "./pages/faq.js";
import testimonialsData from "./pages/testimonials.js";
import galeriatestimonioData from './pages/galeriatestimonio.js';
import formtestimoniosData from './pages/formtestimonios.js';
<<<<<<< HEAD
import eventsData from './pages/events.js';
import challengesData from './pages/challenges.js';

=======
import consumiblesData from "./pages/consumibles.js";   
>>>>>>> 109f0b00cbc1402241269d3c5118821982e1468f
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
         case "/eventos.html":
            context = { ...context, ...eventsData };
            context = { ...context, ...challengesData };
            break;
    }
    console.log("Context: ", JSON.stringify(context, null, 2));
    return context;
}
export default context;