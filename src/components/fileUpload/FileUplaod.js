import React, { Fragment, useState } from 'react'
import i18n from '../../i18n'
import axios from 'axios';
import AuthService from '../../service/AuthService';
import Message from '../message/Message'
// import ProgressBar from  '../progressBar/ProgressBar'
import { ProgressBar } from 'react-bootstrap'

const FileUplaod = () => {
    const [file, setFile] = useState('');
    const [fileName, setFileName] = useState(i18n.t('chooseFile'))
    const [message, setMessage] = useState('')
    const [statusCode, setStatusCode] = useState('')
    const [uploadProcentage, setUploadProcentage] = useState(0)

    const onChange = e => {
        setFile(e.target.files[0]);
        const fName = e.target.files[0].name ? e.target.files[0].name : '';
        setFileName(fName);
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('files', file)
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
                    setTimeout(() => setUploadProcentage(0), 5000);
                },

            });
            setMessage(res.data);
            setStatusCode(res.status);
        } catch (error) {
            setMessage(error.response.data);
            setStatusCode(error.response.status);
        }
    }

    return (
        <Fragment>
            {message ? <Message msg={message} status={statusCode}></Message> : null}
            <form onChange={onChange} onSubmit={onSubmit}>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="customFile" />
                    <label className="custom-file-label" htmlFor="customFile" data-browse={i18n.t('chooseFile')} >{fileName}</label>
                </div>
                <ProgressBar animated now={uploadProcentage} className='mt-2' label={`${uploadProcentage}%`}/>
                <button type="submit" value={i18n.t('uplaod')} className="btn btn-primary btn-block mt-4">{i18n.t('uplaod')}</button>
            </form>
        </Fragment>
    )
}

export default FileUplaod
