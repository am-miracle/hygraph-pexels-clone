import { useState } from "react";
import PreviewImage from "./PreviewImage";

type TProps = {
    src: string;
    alt: string;
    photographer: string;
    original?: string;
}

const Card = ({
    src,
    photographer,
    alt,
    original,
}: TProps) => {
    const [showLightbox, setShowLightbox] = useState(false);
    const [previewImage, setPreviewImage] = useState('');

    const handleDownload = async () => {
        if (!original) {
            console.error("Image source (src) is undefined.");
            return;
        }

        try {
            const res = await fetch(original);
            const blob = await res.blob();

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = alt ? `${alt}` : new Date().getTime().toString();
            a.click();
        } catch (error) {
            alert("Failed to download image!");
        }
    };

    const handleImageClick = () => {
        setShowLightbox(true);
        setPreviewImage(original || src);
      };

    return (
        <>
            {showLightbox && (
                <PreviewImage
                    src={previewImage}
                    closePreview={() => setShowLightbox(false)}
                    photographer={photographer}
                    alt={alt}
                />
            )}
            <li className="card">
                <img
                    src={src}
                    alt={alt}
                    onClick={handleImageClick}
                />
                <div className="details">
                    <div className="photographer">
                        <i className="uis uis-camera"></i>
                        <span>{photographer}</span>
                    </div>
                    <button onClick={handleDownload}>
                        <span>Download</span>
                        <i className="uis uis-import"></i>
                    </button>
                </div>
            </li>
        </>
    );
};

export default Card;
