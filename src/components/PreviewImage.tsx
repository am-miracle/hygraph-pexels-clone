import React from 'react';

type TProps = {
  src: string;
  alt: string;
  photographer: string;
  closePreview: () => void;
}

const PreviewImage = ({ src, alt, photographer, closePreview }: TProps) => {
  return (
    <section className="lightbox">
      <div className="wrapper">
        <header className="header">
          <div className="photographer">
            <i className="uis uis-camera"></i>
            <span>{photographer}</span>
          </div>
          <div className="buttons">
            <i className="uis uis-import"></i>
            <i className="uis uis-times" onClick={closePreview}></i>
          </div>
        </header>
        <div className="preview-img">
          <div className="img">
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviewImage;
