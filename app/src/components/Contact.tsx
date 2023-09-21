import whatsAppLogo from "../images/whatsapp.png";

function Contact() {
  return (
    <div
      className="fixed bottom-5 right-4 w-fit h-fit cursor-pointer"
      onClick={() => window.open("https://wa.me/8860901055121", "_blank")}
    >
      <img src={whatsAppLogo} alt="" className="w-[50px] h-[50px]" />
    </div>
  );
}

export default Contact;
