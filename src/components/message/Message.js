import React, { useState } from 'react'
import PropTypes from 'prop-types'
import i18n from '../../i18n'
import { Alert, Button } from 'react-bootstrap'

const Message = ({ msg, status }) => {
    const [show, setShow] = useState(true);

    const setAlert = () => {
        if (status >= 200 && status < 300) {
            return 'success'
        } else {
            return 'danger'
        }
    }

    if (show) {
        return (
            <Alert variant={setAlert()} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{i18n.t(msg)}</Alert.Heading>
            </Alert>
        );
    }
    return <Button className="mb-2" onClick={() => setShow(true)}>Show Alert</Button>;
}

Message.propTypes = {
    msg: PropTypes.string.isRequired,
}

export default Message