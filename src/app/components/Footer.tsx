import { FOOTER_TEXT } from "@/constants/text";

const Footer = () => {
  const t = FOOTER_TEXT;
    return (
      <footer className="py-4">
          <p>{t.footer}</p>
      </footer>
    );
  };
  
  export default Footer;