import style from '../../styles/signup/ProfileAvatar.module.scss'
import { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import BackendApi from '../../data/backendApi'
// import defaultProfile from '../../images/default-profile.png'
import ImageCropModel from './ImageCropModel';
import { extractImageFileExtensionFromBase64, base64StringtoFile } from './codeCamputils'
const ProfileAvatarUpdate = ({ mobile, signUpstate, setSignUpstate, csrfToken, mutateCsrf  }) => {
    // Button loading
    const [loading, setLoading] = useState(false)
    const [imageUpdateError, setImageUpdateError] = useState({'error': false, message: ""})
    // cropped image or default Profile Image (Base64)
    const [croppedImageBase64, setCroppedImageBase64] = useState("/default-profile.png")
    // cropped image file state to up,load to server or download crop image
    const [croppedImage, setCroppedImage] = useState(null)
    // input File change value state convert file to Base64 to extract file extension
    const [fileSrc, selectFileSrc] = useState(null)
    // React image crop image state
    const [image, setImage] = useState(null)
    // React image crop aspect state
    const [crop, setCrop] = useState({ aspect: 1 / 1, unit: 'px', x: 0, y: 0, width: 200, height: 200});
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        const {number, password} = signUpstate
        const formData = new FormData()
        if (croppedImage) {
            formData.append('image', croppedImage)
        }
        formData.append('number', number)
        formData.append('password', password)
        BackendApi.post('account/create_user_account/profile-image/', formData, {headers: {'X-CSRFToken': csrfToken}})
        .then(response => {
            if (response.data.status === 'ok'){
                setLoading(false)
                setSignUpstate(state => {
                    return {...state, profilePicUpdated: true}
                })
            }
            else{
                setImageUpdateError({error: true, message: response.data.message})
                setSignUpstate(state => {
                    return {...state, profilePicUpdated: false}
                })
            }
            mutateCsrf()
            
        })
    }
    const inputRef = useRef()
    // Handle input file change use e.target.files[0] to get a single file and convert to base64 and save it in state so that we can extract file extension later
    const handleFileChange = (e) => {
        const imageBlob = e.target.files[0]
        let reader = new FileReader();
        reader.readAsDataURL(imageBlob)
        reader.onloadend = function(){
            selectFileSrc(reader.result)
        }
        
    }
    
    // clear file input and set file input value to null as well as its state to null
    const clearFileInput = () => {
        selectFileSrc(null)
        inputRef.current.value = null
    }
    // get cropped image and draw it in canvas then convert it to base64 using canves.toDataUrl() and save it on croppedImageState to display cropped image as profile
    // then extract file extension from file input state and convert the canves base64 to file using base64StringtoFile() so that we can upload cropped image to server
    // or download it
    const getCroppedImg = () => {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');
       
        ctx.drawImage(
          image,
          crop.x * scaleX,
          crop.y * scaleY,
          crop.width * scaleX,
          crop.height * scaleY,
          0,
          0,
          crop.width,
          crop.height,
        );
        // get Base64 of cropped image from canves to display preview save it in state
        const croppedBase64Image = canvas.toDataURL('image/jpeg');
        setCroppedImageBase64(croppedBase64Image)
        // Extract Image file extension
        const imageFileExtension = extractImageFileExtensionFromBase64(fileSrc)
        // Extract Image file name
        const filename = signUpstate.number + "_profile_pic." + imageFileExtension
        // Convert cropped base64 to File and save it in state to upload on server
        const croppedImageFile = base64StringtoFile(croppedBase64Image, filename)
        setCroppedImage(croppedImageFile)
        // Unmount Image Cropper
        console.log(croppedImageFile)
        selectFileSrc(null)
    }

    return (
        <div className={style.profile_avatar_update}>
            <div style={{marginBottom: '15px'}}>
                <img src={croppedImageBase64} alt="current_profile_pic" className={`ui circular image ${mobile ? "small" : "medium"}`} style={{width: mobile ? "150px" : "250px", margin: '0 auto'}}/>
            </div>
            <form className={"ui form " + style.profile_avatar_update_form} onSubmit={handleSubmit}>
                <div className={style.choose_file}>
                    <label htmlFor="choose_file">
                        <input type="file" id={style.choose_file} accept="image/" onChange={handleFileChange} ref={inputRef}/>
                        <span className={style.file_upload_header}>Choose Photo</span>
                        <span className={style.file_upload_text}>Please select jpg or png file</span>
                    </label>
                </div>
                {fileSrc && (
                <ImageCropModel closeCropModel={clearFileInput}>
                    <ReactCrop src={fileSrc} crop={crop} onChange={newCrop => setCrop(newCrop)} onImageLoaded={setImage} style={{height: "80%"}} />
                    <div style={{textAlign: 'right', marginTop: '15px'}}>
                        <button className="ui secondary button" onClick={clearFileInput}>
                            Cancel
                        </button>
                        <button className="ui positive right labeled icon button" onClick={getCroppedImg}>
                            Crop Image
                            <i className="checkmark icon"></i>
                        </button>
                    </div>
                </ImageCropModel>
                )}
                {imageUpdateError.error && (
                <div className="ui tiny message red">
                    {imageUpdateError.message}
                </div>
                )}
                <div className="button_container">
                    <button className={`ui positive right labeled icon button ${loading && "loading"}`} type="submit">
                        upload
                        <i className="checkmark icon"></i>
                    </button>
                </div>
            </form>
            <style jsx>{`
                .button_container {
                    text-align: right;
                    margin-top: 20px;
                }
            `}</style>
        </div>

    )
}

export default ProfileAvatarUpdate