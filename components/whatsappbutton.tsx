import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "919442268229";

  const message = encodeURIComponent(
    "Hello! I would like to know more about your transport services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110">
        <FaWhatsapp className="text-white text-4xl" />
      </div>
    </a>
  );
}