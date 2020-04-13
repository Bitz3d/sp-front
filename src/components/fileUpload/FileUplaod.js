import React, { Fragment, useState } from 'react'
import i18n from '../../i18n'
import axios from 'axios';
import AuthService from '../../service/AuthService';
import { ProgressBar } from 'react-bootstrap'
import { Alert } from 'react-bootstrap'


const FileUplaod = () => {
    const [files, setFiles] = useState([]);
    const [fileName, setFileName] = useState(i18n.t('chooseFile'))
    const [message, setMessage] = useState('')
    const [statusCode, setStatusCode] = useState('')
    const [uploadProcentage, setUploadProcentage] = useState(0)

    const onChange = e => {
        setFiles(e.target.files);
        const fName = e.target.files[0] ? e.target.files[0].name : '';
        setFileName(fName);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();

        for (let index = 0; index < files.length; index++) {
            formData.append('files', files[index]);

        }
        const token = AuthService.getUserInfo();

        try {
            const res = await axios.post(process.env.REACT_APP_SERVER + "/upload", formData, {
                headers: {
                    'Conent-Type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + token
                },
                onUploadProgress: progressEvent => {
                    setUploadProcentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
                    //clear progresss bar
                    setTimeout(() => setUploadProcentage(0), 3000);
                },

            });
            setMessage(res.data);
            setStatusCode('success');
        } catch (error) {
            setMessage(error.response.data);
            setStatusCode('danger');
        }
    }

    return (

        <div className="container mt-4">
            <h4 className="display-4 text-center mb-4">
                {i18n.t('fileUplaod')}
            </h4>
            {message ? (<Alert variant={statusCode} onClose={() => setMessage(null)} dismissible>
                <Alert.Heading>{i18n.t(message)}</Alert.Heading>
            </Alert>) : null}
            <form onChange={onChange} onSubmit={onSubmit}>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" multiple />
                    <label className="custom-file-label" htmlFor="customFile" data-browse={i18n.t('chooseFile')} >{fileName}</label>
                </div>
                <ProgressBar animated now={uploadProcentage} className='mt-2' label={`${uploadProcentage}%`} />
                <button type="submit" value={i18n.t('uplaod')} className="btn btn-primary btn-block mt-4">{i18n.t('uplaod')}</button>
            </form>
        </div>

    )
}

export default FileUplaod
