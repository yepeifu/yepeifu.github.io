import React from 'react'
import { useAccount, useConnect } from "@starknet-react/core"

const StarknetConnect = () => {
  const { connect, connectors } = useConnect()
  const { address } = useAccount()

  return (
    <div>
      <div>Connect Wallet</div>

      {
        connectors.map((connector) => (
          <button onClick={(() => connect({ connector }))}>
            Connect {connector.id}
          </button>
        ))
      }

      <p>{address}</p>
    </div>
  )
}

export default StarknetConnect