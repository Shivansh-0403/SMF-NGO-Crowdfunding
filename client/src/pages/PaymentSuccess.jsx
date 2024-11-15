// import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSearchParams } from "react-router-dom"
const PaymentSuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        // <div>
            <div>

                <h1> Order Successfull</h1>

                <div>
                    Reference No.{referenceNum}
                </div>

            </div>
        // </div>
    )
}

export default PaymentSuccess