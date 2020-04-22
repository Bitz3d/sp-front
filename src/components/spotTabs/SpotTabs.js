import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthService from "../../service/AuthService";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tabs'
import SpotTable from './spotTable/SpotTable'


const SpotTabs = () => {
    const [modelaNames, setModelNames] = useState([]);
    const [key, setKey] = useState();
    const [welding, setWelding] = useState([]);

    useEffect(() => {
        const token = AuthService.getUserInfo();

        const userCarModels = axios.get(process.env.REACT_APP_SERVER + "/models-names",
            {
                headers: {

                    'Authorization': 'Bearer ' + token
                }
            },
        );

        userCarModels.then(carModel => {
            setModelNames(carModel.data)
        }).catch(err => {
            alert("Nie udalo sie pobrać danych")
        });

        const weldingSpotsResponse = axios.get(process.env.REACT_APP_SERVER + "/welding-spots",
            {
                headers: {

                    'Authorization': 'Bearer ' + token
                }
            },
        );
        weldingSpotsResponse.then(response => {
            setWelding(response.data)
        }).catch(err => {
            console.log(err)
        })
    }, []);


    const renderModelTabs = () => {
        return (
            modelaNames.map((modelName, index) =>
                <Tab key={index} eventKey={modelName} title={modelName}>
                    <SpotTable modelName={modelName} modelWeldingPoints={welding.filter(spot => spot.modelName === modelName)}></SpotTable>
                </Tab>
            )
        )
    }


    return (
        <div className='container'>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}>
                {renderModelTabs()}
            </Tabs>
        </div>
    )
}
export default SpotTabs