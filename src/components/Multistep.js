import BusinessKYC from "./CompanyDetail.js"
import { useMultiStepForm } from "../hooks/useMultiStepForm.ts"

function Multistep() {
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <BusinessKYC />,
        ])

    function onSubmit(e) {
        e.preventDefault()
        if (!isLastStep) return next()
        alert("Successful Account Creation")
    }

    return (
        <>

        </>
    )
}

export default Multistep
