import BillingHistory from "../../components/BillingHistory";
import HeaderSection from "@aio/components/HeaderSection";


const TestComponents = () => {
    return (
        <>
            <HeaderSection 
                heading={'Product Sell'}
                subHeading={'Product Sell History'}
            />
            <BillingHistory />
        </>
    );
}

export default TestComponents;