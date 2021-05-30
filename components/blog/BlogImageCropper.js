import { extractImageFileExtensionFromBase64, base64StringtoFile } from '../../components/signup/codeCamputils'
const BlogImageCropper = ({ cropperModalActive, children, closeCropperModal, fileSrc, selectFileSrc, imageType, setCompletedCrop, loadedImage, crop }) => {

    const getCroppedImg = () => {
        const canvas = document.createElement('canvas');
        const scaleX = loadedImage.naturalWidth / loadedImage.width;
        const scaleY = loadedImage.naturalHeight / loadedImage.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
       
        ctx.drawImage(
          loadedImage,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );
        // Extract Image file extension
        const imageFileExtension = extractImageFileExtensionFromBase64(fileSrc)
        const cropImageType = imageType ? imageType : imageFileExtension === "png" ? "image/png" : "image/jpeg"
        // get Base64 of cropped image from canves to display preview save it in state
        const croppedBase64Image = canvas.toDataURL(cropImageType);

        // Extract Image file name
        const filename = "blog_photo." + imageFileExtension
        // Convert cropped base64 to File and save it in state to upload on server
        const croppedImageFile = base64StringtoFile(croppedBase64Image, filename)
        setCompletedCrop(croppedImageFile)
        // Unmount Image Cropper
        selectFileSrc(null)
        closeCropperModal()
    }
    
    return (
        <div className={`container ${!cropperModalActive && "hidden"}`}>
            <div className={`ui fullscreen modal transition ${cropperModalActive ? "visible active" : "hidden"}`}>
                <i className="close icon" onClick={closeCropperModal}/>
                <div className="header">
                    Update Your Settings
                </div>
                <div className="content">   
                    {children}
                </div>
                <div className="actions">
                    <div className="ui button" onClick={closeCropperModal}>Cancel</div>
                    <div className="ui green button" onClick={getCroppedImg}>Crop</div>
                </div>
            </div>
            <style jsx>{`
                .container {
                    display: block;
                    position: fixed;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100vw;
                    height: 100vh;
                    z-index: 1002;
                }
                .container.hidden {
                    display: none;
                }
                .content {
                    margin-top: 60px;
                    height: 80%;
                    max-width: 100%;
                    overflow: auto !important;
                    text-align: center;
                }

                @media (min-width: 992px){
                    .content {
                        margin-top: 90px;
                    }
                }
            `}</style>
        </div>
    )
}

export default BlogImageCropper

//  <div className="ui fullscreen modal transition hidden"> Hidden

// ui fullscreen modal transition visible active Active