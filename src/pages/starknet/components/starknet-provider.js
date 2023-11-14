import React from "react";

import { InjectedConnector } from "starknetkit/injected";
// import { ArgentMobileConnector } from "starknetkit/argentMobile";
// import { WebWalletConnector } from "starknetkit/webwallet";
import { mainnet } from "@starknet-react/chains";
import { StarknetConfig, publicProvider } from "@starknet-react/core";

const StarknetProvider = ({ children }) => {
    const chains = [
        mainnet
    ]
    const providers = [
        publicProvider()
    ]
    const connectors = [
        new InjectedConnector({ options: { id: "braavos", name: "Braavos" } }),
        new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
    ]

    return (
        <StarknetConfig
            chains={chains}
            providers={providers}
            connectors={connectors}
        >
            {children}
        </StarknetConfig>
    )
}
export default StarknetProvider