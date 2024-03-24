import { useState } from "react";

const useTitle = (titleText="No title given here", discText="...........")=>{
    const [title, setTitle] = useState([titleText]);
    const [disc, setDisc] = useState([discText]);
    return {title, disc};
}
export default useTitle;