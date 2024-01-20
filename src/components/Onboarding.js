import { useMultiStepForm } from "../hooks/useMultiStepForm.ts"
import BankAccount from "./BankAccount.js"
import BankAccountList from "./BankAccountList.js"
import BusinessAddress from "./BusinessAddress.js"
import BusinessVerfication from "./BusinessVerfication.js"
import CompanyDetail from "./CompanyDetail.js"
import Documents from "./Documents.js"

function OnBoarding() {
    const { step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <CompanyDetail />,
            <BusinessAddress />,
            <Documents />,
            <BusinessVerfication />,
            <BankAccount />,
            <BankAccountList />
        ])

    function nextPage() {
        if (!isLastStep) return next()
        alert("Steps completed!")
    }
    return (
        <>
            <div className="right-content">
                <div className="content-header">
                    <h1>Business Onboarding <span className="inprogress-text text-primary">In Progess</span></h1>
                    <h3><strong>Legal Name:</strong> ABC Exports Limited</h3>
                </div>
                <div className="subcontent-wrapper">
                    <div className="title">
                        <h3>Business KYC <span className="inprogress-text text-primary">In Progess</span></h3>
                    </div>
                    <div className="inner-dashboard">
                        <div className="left-navtabs">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Business Info</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Verification</a>
                                </li>
                                <li className="nav-item">
                                    <i className="far fa-clock"></i>
                                    <a className="nav-link" href="#">Bank Account</a>
                                </li>
                            </ul>
                        </div>
                        <div className="right-form-content">
                            {step}
                        </div>
                    </div>
                    <div className="nextpage-section">
                        {!isFirstStep && (<input type="submit" onClick={back} className="btn btn-secondary btn me-auto" value="PREVIOUS" />)}
                        <input type="submit" onClick={() => nextPage()} className="btn btn-secondary btn ms-auto" value="NEXT" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default OnBoarding