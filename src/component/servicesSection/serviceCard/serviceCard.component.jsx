import "./serviceCard.styles.scss";

const ServiceCard = ({data,index}) =>{

    const {title,icon,text}=data;
    
    return(
        <div className="card  ">
            <div className="icon-box">
                <div className="icon">
                    <img src={icon}   alt={title} /> 
                </div>
                <h4><a href="">{title}</a></h4>
                <p className="bodyText">{text}</p>
            </div>
        </div>

    )
}
export default ServiceCard;