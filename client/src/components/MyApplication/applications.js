import googlelogo from "../../assets/googlepic.webp";
import microsoftlogo from "../../assets/microsoft.jpg";
import adobelogo from "../../assets/adobelogo.jpg";

const applications = [

    {
        id: 1,
        logo: googlelogo,
        company: "Google",
        title: "Women Tech Scholarship",
        category: "Engineering",
        amount: "₹50,000",
        country: "USA",
        deadline: "30 Aug 2026",

        appliedDate: "15 July 2026",

        status: "Under Review",

        progress: 2
    },

    {
        id: 2,
        logo: microsoftlogo,
        company: "Microsoft",
        title: "Women in STEM Scholarship",
        category: "Computer Science",
        amount: "₹1,00,000",
        country: "India",
        deadline: "15 Sept 2026",

        appliedDate: "10 July 2026",

        status: "Accepted",

        progress: 4
    },

    {
        id: 3,
        logo: adobelogo,
        company: "Adobe",
        title: "Adobe India Scholarship",
        category: "Technology",
        amount: "₹75,000",
        country: "India",
        deadline: "10 Oct 2026",

        appliedDate: "5 July 2026",

        status: "Submitted",

        progress: 1
    }

];

export default applications;