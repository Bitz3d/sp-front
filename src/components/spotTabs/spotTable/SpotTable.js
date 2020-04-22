import React from 'react'
import PropTypes from 'prop-types'
import Table from 'react-bootstrap/Table'
import i18n from '../../../i18n';
import ReactModal from 'react-modal';
import { useModal } from "react-modal-hook";
import { Canvas } from 'react-three-fiber'
import './spotTable.css'
import Control from '../../THREE/control/Control'
import Car from '../../THREE/car/Car'
import Camera from '../../THREE/camera/Camera'


const SpotTable = ({ modelWeldingPoints }) => {

    const [showModal, hideModal] = useModal(
        () => (
            <ReactModal isOpen>
                <Canvas >
                    <Camera />
                    <Control />
                    <Car weldingSpots={modelWeldingPoints} />
                </Canvas>
                <button onClick={hideModal}>Hide modal</button>
            </ReactModal>
        ),
        [modelWeldingPoints]
    );

    const renderTableBody = () => {
        return modelWeldingPoints.map((spot, index) => {
            return <tr key={index}>
                <td>{spot.spotName}</td>
                <td>{spot.modelName}</td>
                <td>{spot.pointX}</td>
                <td>{spot.pointY}</td>
                <td>{spot.pointZ}</td>
                <td><button onClick={showModal}>{i18n.t('show')}

                </button></td>
            </tr>
        }
        )
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{i18n.t('spotName')}</th>
                    <th>{i18n.t('modelName')}</th>
                    <th>{i18n.t('pointX')}</th>
                    <th>{i18n.t('pointY')}</th>
                    <th>{i18n.t('pointZ')}</th>
                    <th>{i18n.t('show')}</th>
                </tr>
            </thead>
            <tbody>
                {renderTableBody()}
            </tbody>
        </Table>

    )
}

SpotTable.propTypes = {
    modelName: PropTypes.string.isRequired,
    modelWeldingPoints: PropTypes.array.isRequired,
}

export default SpotTable
