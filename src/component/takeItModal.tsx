import { X } from "lucide-react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface ModalContent {
  caption: string;
  src: StaticImageData;
  alt?: string;
  description: string | string[];
}

interface TakeItModalProps {
  modalContent: ModalContent;
  closeModal: () => void;
}

const TakeItModal = ({ modalContent, closeModal }: TakeItModalProps) => {
  const descriptionArray = Array.isArray(modalContent.description) 
    ? modalContent.description 
    : [modalContent.description];
    
  return (
    <div className="fixed inset-0 backdrop-blur-sm backdrop-brightness-50 backdrop-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-5 rounded-md max-w-3xl w-full relative max-h-[600px] overflow-auto">
        <div
          onClick={closeModal}
          className="absolute top-2 right-2 text-primary text-xl cursor-pointer"
        >
          <X />
        </div>
        <h2 className="text-2xl font-bold text-secondary mb-4 mt-2">
          {modalContent.caption}
        </h2>
        <Image
          src={modalContent.src}
          alt={modalContent.alt || ""}
          className="w-full h-[400px] object-cover mb-4"
        />
        <div className="text-lg text-gray-600 mb-4">
          {descriptionArray.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakeItModal;