import StarknetConnect from './components/starknet-connect'
import StarknetProvider from './components/starknet-provider';


const StarkNet = () => {
    return (
        <StarknetProvider>
            <StarknetConnect />
        </StarknetProvider>
    );
}

export default StarkNet;