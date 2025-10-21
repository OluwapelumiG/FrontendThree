import Display from "./Display";
import Input from "./Input";
import { useState } from "react";

function FormPage(){

    const [companyName, setCompanyName ] = useState('');

    return (
        <>
            <div className="grid grid-cols-2 w-full bg-gray-200 mx-auto max-w-7xl">
                <Input company={companyName} setName={setCompanyName} />
                <Display name={companyName} />
            </div>
        </>
    )
}

export default FormPage;