import { connect } from "react-redux";
import { setCounterAsync } from "../../Config/Store/Slices/appState";
import { useEffect } from "react";

const Login = (props : any) => {
    
    const { counter , setCounter } = props;

    useEffect(() => {
        setCounter()
    },[])
    
    return <>
        Login Page : {counter}
    </>
}


const mapStateToProps = (state : any) => {
    const { appState } = state;
    return { counter : appState.counter}
}

const mapPropsToDispatch = (dispatch : any) => {
    return {
        setCounter : () => dispatch(setCounterAsync())
    }
}

export default connect(mapStateToProps,mapPropsToDispatch)(Login);