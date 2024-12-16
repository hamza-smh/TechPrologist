import Navigation2 from "../../component/navigation2/navigation2";
import Steps from "../../component/pricing/Step/step.component";
import SelectPlan from "../../component/pricing/selectPlan/selectPlan";

const SelectPricingPlan =() =>{
    return(
        <div className="price-bkg" style={{marginTop: "85px",backgroundColor:"#000"}}>
            <Navigation2 />
            <Steps />
            <SelectPlan />
        </div>
    );
}
export default SelectPricingPlan;