import "./Contact.css";

const Contact = () => {
    const root = document.querySelector("#root");
    const contact = document.createElement("div");
    contact.classList.add("pages");
    contact.setAttribute("id", "contact");
    
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Information";

    const contactLocation = document.createElement("div");
    const location = "Shop No. 1-03, P1/F, Hoi Tat Estate (Phase 3), Sham Shui Po, Kowloon"
    contactLocation.textContent = location;
    const contactInformation = document.createElement("div");
    const contactNumber = document.createElement("p");
    const contactEmail = document.createElement("p");
    const number = "Contact Number: +852 21800000";
    const email = "Contact Email: falcon102582@gmail.com";
    
    contactEmail.textContent = email;
    contactNumber.textContent = number;
    contactInformation.appendChild(contactNumber);
    contactInformation.appendChild(contactEmail);

    contact.appendChild(contactTitle);
    contact.appendChild(contactInformation);
    contact.appendChild(contactLocation)

    root.appendChild(contact)
}

export default Contact;