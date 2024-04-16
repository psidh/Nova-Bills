import { Mail, Phone, User, Map, LandPlot, MapPin } from "lucide-react";

const BilledByInfo = [

    {
        title : "Add Name",
        name : "fullName",
        icon : (<User size={19}/>)
    },
    {
        title : "Add Mail",
        name : "email",
        icon : (<Mail size={19}/>)
    },
    {
        title : "Add Phone Number",
        name : "phoneNumber",
        icon : (<Phone size={19}/>)
    },
    {
        title : "Add Address",
        name : "address",
        icon : (<Map size={19}/>)
    },
    {
        title : "Add City",
        name : "city",
        icon : (<LandPlot size={19}/>)
    },
    {
        title : "Add pincode",
        name : "pincode",
        icon : (<MapPin size={19}/>)
    },
];

export default BilledByInfo;