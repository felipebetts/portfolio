import { transitions, positions, Provider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: '30px',
    // you can also just use 'scale'
    transition: transitions.SCALE
}

const AlertProvider = ({ children }) => {
    return (
        <Provider template={AlertTemplate} {...options}>
            {children}
        </Provider>
    )
}

export default AlertProvider
