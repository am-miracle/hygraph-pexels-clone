import React from 'react'

const PreviewImage = () => {
  return (
    <section className="lightbox">
        <div className="wrapper">
            <header className="header">
                <div className="photographer">
                    <i className="uis uis-camera"></i>
                    <span></span>
                </div>
                <div className="buttons">
                    <i className="uis uis-import"></i>
                    <i className="uis uis-times"></i>
                </div>
            </header>
            <div className="preview-img">
                <div className="img">
                    <img src="" alt="preview-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default PreviewImage