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

    return (
        <li className="card">
            <img
                src={src}
                alt={alt}
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
    );
};

export default Card;
