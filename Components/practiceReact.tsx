
export default function PracticeReact(){
    const trueValue = true

    return(
        //this or that
        <div>

        {trueValue && (<p>the value is true</p>)}

        {trueValue ? (<p>the value is true </p>):(<p>The value is false</p>)}

        </div>
    )

}